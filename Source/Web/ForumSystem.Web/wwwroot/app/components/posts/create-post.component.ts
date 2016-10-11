import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { Validators, FormGroup, FormArray, FormBuilder } from '@angular/forms';

import { InputPost } from '../../core/domain/posts/post-input';
import { OperationResult } from '../../core/domain/operation-result';
import { PostsService } from './posts.service';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';

declare var $: any;

@Component({
    selector: 'post',
    templateUrl: './app/components/posts/create-post.component.html'
})
export class PostsCreateComponent implements OnInit {
    private createPostForm: FormGroup;
    private createPostModel: any;
    private errors: string[];

    constructor(public postsService: PostsService,
        private formBuilder: FormBuilder,
        private router: Router,
        private notificationService: NotificationService,
        private authService: AuthService) {
    }

    ngOnInit() {this.createPostForm = this.formBuilder.group({
            Title: ['', [Validators.required, Validators.maxLength(100)]],
            Content: ['', Validators.required],
            Tags: this.formBuilder.array([
                this.initTag()
            ])
        });
    }

    create(newPost: InputPost) {        
        this.postsService.createPost(this.createPostForm.value)
            .subscribe((res: Response) => {
                var data = res.json();
                this.router.navigate(['/posts/:id', { id: data }]);
            },
            error => console.error('Error: ' + error));
    };

    initTag() {
        return this.formBuilder.group({
            Id: [''],
            Name: ['', Validators.required]
        });
    }

    addTag() {
        const control = <FormArray>this.createPostForm.controls['Tags'];
        control.push(this.initTag());
    }

    removeTag(i: number) {
        const control = <FormArray>this.createPostForm.controls['Tags'];
        control.removeAt(i);
    }
}