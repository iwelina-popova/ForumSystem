import { Component, OnInit } from '@angular/core';
import { DataGrid } from 'primeng/components/datagrid/datagrid';

import { AdministrationService } from './administration.service';
import { AuthService } from '../../core/services/auth.service';
import { AdminPost } from '../../core/domain/posts/admin-post';

declare var $: any;
declare var moment: any;

@Component({
    selector: 'administration',
    templateUrl: './app/components/administration/administration.component.html'
})
export class AdministrationComponent implements OnInit {
    private posts: AdminPost[];
    private post: AdminPost;
    private selectedPost: AdminPost;
    private isNewPost: boolean;
    private displayDialog: boolean;

    constructor(private adminService: AdministrationService,
        private authService: AuthService) { }

    ngOnInit() {
        this.adminService.getAllPosts()
            .subscribe(res => {
                var data: any = res.json();
                this.posts = data;
                this.posts.forEach(post => {
                    post.CreatedOnString = moment(post.CreatedOn).format('MMMM Do YYYY, h:mm:ss a');
                    post.ModifiedOn = moment(post.ModifiedOn).format('MMMM Do YYYY, h:mm:ss a');
                });
                console.log(this.posts);
            });
    }

    save() {
        var errorDiv = $('#errorMessage');
        if (!this.post.Title || !this.post.Content) {
            errorDiv.show();
        } else if (this.isNewPost) {
            this.adminService.createPost(this.post)
                .subscribe(res => {
                    this.posts.push(this.post);
                    errorDiv.hide();
                    this.displayDialog = false;
                });
        } else {
            this.posts[this.findSelectedPostIndex()] = this.post;
            this.adminService.updatePost(this.post)
                .subscribe(res => {
                    this.post = null;

                    errorDiv.hide();
                    this.displayDialog = false;
                });
        }
    }

    delete() {
        var index = this.findSelectedPostIndex();
        this.adminService.deletePost(this.post.Id)
            .subscribe(res => {
                this.displayDialog = false;
                this.posts[index].IsDeleted = true;
            });
    }

    onRowSelect(event) {
        this.isNewPost = false;
        this.post = this.clonePost(event.data);
        this.displayDialog = true;
    }

    clonePost(p: AdminPost): AdminPost {
        let post = new AdminPost(0, '', '', '', new Date(), new Date(), false);
        for (let prop in p) {
            post[prop] = p[prop];
        }

        return post;
    }

    showDialogToAdd() {
        this.isNewPost = true;
        this.cleanNewPost();
        this.displayDialog = true;
    }

    findSelectedPostIndex(): number {
        return this.posts.indexOf(this.selectedPost);
    }

    cleanNewPost() {
        this.post = new AdminPost(0, '', '', '', new Date(), new Date(), false);
    }
}