"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var data_service_1 = require('../../core/services/data.service');
var PostsService = (function () {
    function PostsService(postsService) {
        this.postsService = postsService;
        this.postsApi = 'api/posts';
        this.createPostApi = 'api/posts/create';
        this.answerApi = 'api/answers/create';
        this.pageSize = 10;
    }
    PostsService.prototype.getPosts = function (page) {
        return this.postsService.getByPage(this.postsApi, page, this.pageSize);
    };
    ;
    PostsService.prototype.getById = function (id) {
        return this.postsService.getSingle(this.postsApi, id);
    };
    ;
    // TODO:
    //getPostsByTag(tag: string) {
    //    var url = this.postsTaggedApi + '/' + tag;
    //    return this.postsService.getAll(url);
    //};
    PostsService.prototype.createPost = function (newPosts) {
        return this.postsService.post(this.createPostApi, newPosts);
    };
    ;
    PostsService.prototype.createAnswer = function (newAnswer) {
        return this.postsService.post(this.answerApi, newAnswer);
    };
    PostsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], PostsService);
    return PostsService;
}());
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map