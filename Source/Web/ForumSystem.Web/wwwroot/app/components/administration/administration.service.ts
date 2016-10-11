import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { AdminPost } from '../../core/domain/posts/admin-post';
import { DataService } from '../../core/services/data.service';

@Injectable()
export class AdministrationService {
    private administrationApi: string = 'api/administration/posts';

    constructor(public adminService: DataService) {
    }

    getAllPosts() {
        return this.adminService.getAll(this.administrationApi);
    }

    createPost(post: AdminPost) {
        return this.adminService.post(this.administrationApi + '/create', post);
    }

    updatePost(post: AdminPost) {
        return this.adminService.put(this.administrationApi + '/update', post);
    }

    deletePost(id: number) {
        return this.adminService.delete(this.administrationApi + '/delete', id);
    }
}