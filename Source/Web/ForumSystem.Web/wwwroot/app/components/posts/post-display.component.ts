import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Post } from '../../core/domain/posts/post';
import { AnswerInput } from '../../core/domain/answers/answer-input';
import { Paginated } from '../../core/common/paginated';

import { PostsService } from './posts.service';
import { AuthService } from '../../core/services/auth.service';
import { UtilityService } from '../../core/services/utility.service';
import { NotificationService } from '../../core/services/notification.service';

declare var $: any;

@Component({
    selector: 'posts',
    templateUrl: './app/components/posts/post-display.component.html'
})
export class PostDisplayComponent implements OnInit {
    private postsApi: string = 'api/posts';
    private post = new Post(0, '', '', '', new Date(), [], [], 4);
    private postId: number;
    private newAnswer = new AnswerInput('', '', 0);
    private displayDialog: boolean;

    constructor(private postsService: PostsService,
        private utilityService: UtilityService,
        private authService: AuthService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.postId = params['id'];
            this.getPost(this.postId);
        });
    };

    getPost(id: number): any {
        this.postsService.getById(id)
            .subscribe(res => {
                var data: any = res.json();
                this.post = data;
            },
            (errors: string[]) => {
            });
    };

    isUserLoggedIn() {
        return this.authService.isLoggedIn();
    }

    save() {
        var errorDiv = $('#errorMessage');
        if (!this.newAnswer.Content) {
            errorDiv.show();
        } else {
            this.newAnswer.PostId = this.postId;
            this.postsService.createAnswer(this.newAnswer)
                .subscribe(res => {
                    var data = res.json();
                    this.post.Answers.push(data);
                    errorDiv.hide();
                    this.displayDialog = false;
                });
        }
    }

    showDialogToAdd() {
        this.displayDialog = true;
    }

    convertDateTime(date: Date) {
        return this.utilityService.convertDateTime(date);
    };
}