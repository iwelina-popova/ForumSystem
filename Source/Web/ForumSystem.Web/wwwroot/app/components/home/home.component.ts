import { Component, OnInit } from '@angular/core';
import { Post } from '../../core/domain/posts/post';
import { Paginated } from '../../core/common/paginated';

import { TimeAgoPipe } from 'angular2-moment/src/TimeAgoPipe';
import { PostsService } from '../posts/posts.service';
import { DataService } from '../../core/services/data.service';
import { AuthService } from '../../core/services/auth.service';
import { UtilityService } from '../../core/services/utility.service';

declare var $: any;
declare var moment: any;

@Component({
    selector: 'home',
    templateUrl: './app/components/home/home.component.html'
})
export class HomeComponent extends Paginated implements OnInit {
    private postsApi: string = 'api/posts';
    private tagsApi: string = 'api/tags';
    private voteApi: string = 'api/votes/vote';
    private posts: Array<Post>;

    constructor(private postsService: PostsService,
        private dataService: DataService,
        private authService: AuthService,
        private utilityService: UtilityService) {
        super(0, 0, 0);
    }

    ngOnInit() {
        this.getPosts(0);
    };

    getPosts(page?: number): void {
        this.postsService.getPosts(page)
            .subscribe(res => {
                var data: any = res.json();

                this.posts = data.Items;
                this.posts.forEach(post => {
                    post.CreatedOn = moment(post.CreatedOn).fromNow();
                });
                this.page = data.Page;
                this.pagesCount = data.TotalPages;
                this.totalCount = data.TotalCount;
            },
            error => console.error('Error: ' + error));
    };

    convertDateTime(date: Date) {
        return this.utilityService.convertDateTime(date);
    };

    vote(voteType: number, postId: number) {
        if (this.authService.isLoggedIn()) {
            var data = JSON.stringify({ postId: postId, voteType: voteType });
            this.dataService.post(this.voteApi, data)
                .subscribe(res => {
                    var data: any = res.json();
                    $("div[data-action='votesCount'][id='" + postId + "']")
                        .html(data.Count);
                });
        }
    }
}