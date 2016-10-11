import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Post } from '../../core/domain/posts/post';
import { InputPost } from '../../core/domain/posts/post-input';
import { AnswerInput } from '../../core/domain/answers/answer-input';
import { DataService } from '../../core/services/data.service';

@Injectable()
export class PostsService {
    private postsApi: string = 'api/posts';
    private createPostApi: string = 'api/posts/create';
    private answerApi: string = 'api/answers/create';
    private pageSize: number = 10;

    constructor(public postsService: DataService) {
    }

    getPosts(page: number) {
        return this.postsService.getByPage(this.postsApi, page, this.pageSize);
    };

    getById(id: number) {
        return this.postsService.getSingle(this.postsApi, id);
    };

    // TODO:
    //getPostsByTag(tag: string) {
    //    var url = this.postsTaggedApi + '/' + tag;
    //    return this.postsService.getAll(url);
    //};

    createPost(newPosts: InputPost) {
        return this.postsService.post(this.createPostApi, newPosts);
    };

    createAnswer(newAnswer: AnswerInput) {
        return this.postsService.post(this.answerApi, newAnswer);
    }
}