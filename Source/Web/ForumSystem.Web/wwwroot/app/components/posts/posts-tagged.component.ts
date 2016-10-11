import { Component, OnInit } from '@angular/core';

import { Post } from '../../core/domain/posts/post';
import { Paginated } from '../../core/common/paginated';
import { DataService } from '../../core/services/data.service';
import { UtilityService } from '../../core/services/utility.service';

@Component({
    selector: 'home',
    templateUrl: './app/components/posts/posts-tagged.component.html'
})
export class PostsTaggedComponent extends Paginated implements OnInit {
    private postsApi: string = 'api/posts/tagged';
    private posts: Array<Post>

    constructor(private dataService: DataService,
        private utilityService: UtilityService) {
        super(0, 0, 0);
    }

    ngOnInit() {
        this.getPosts(0);
    };

    getPosts(page?: number): void {
        this.dataService.getByPage(this.postsApi, page, 5)
            .subscribe(res => {
                var data: any = res.json();

                this.posts = data.Items;
                this.page = data.Page;
                this.pagesCount = data.TotalPages;
                this.totalCount = data.TotalCount;
            },
            error => console.error('Error: ' + error));
    };

    convertDateTime(date: Date) {
        return this.utilityService.convertDateTime(date);
    };
}