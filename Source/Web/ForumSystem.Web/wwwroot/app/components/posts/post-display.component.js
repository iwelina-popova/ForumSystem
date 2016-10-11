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
var router_1 = require('@angular/router');
var post_1 = require('../../core/domain/posts/post');
var answer_input_1 = require('../../core/domain/answers/answer-input');
var posts_service_1 = require('./posts.service');
var auth_service_1 = require('../../core/services/auth.service');
var utility_service_1 = require('../../core/services/utility.service');
var PostDisplayComponent = (function () {
    function PostDisplayComponent(postsService, utilityService, authService, route) {
        this.postsService = postsService;
        this.utilityService = utilityService;
        this.authService = authService;
        this.route = route;
        this.postsApi = 'api/posts';
        this.post = new post_1.Post(0, '', '', '', new Date(), [], [], 4);
        this.newAnswer = new answer_input_1.AnswerInput('', '', 0);
    }
    PostDisplayComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.postId = params['id'];
            _this.getPost(_this.postId);
        });
    };
    ;
    PostDisplayComponent.prototype.getPost = function (id) {
        var _this = this;
        this.postsService.getById(id)
            .subscribe(function (res) {
            var data = res.json();
            _this.post = data;
        }, function (errors) {
        });
    };
    ;
    PostDisplayComponent.prototype.isUserLoggedIn = function () {
        return this.authService.isLoggedIn();
    };
    PostDisplayComponent.prototype.save = function () {
        var _this = this;
        var errorDiv = $('#errorMessage');
        if (!this.newAnswer.Content) {
            errorDiv.show();
        }
        else {
            this.newAnswer.PostId = this.postId;
            this.postsService.createAnswer(this.newAnswer)
                .subscribe(function (res) {
                var data = res.json();
                _this.post.Answers.push(data);
                errorDiv.hide();
                _this.displayDialog = false;
            });
        }
    };
    PostDisplayComponent.prototype.showDialogToAdd = function () {
        this.displayDialog = true;
    };
    PostDisplayComponent.prototype.convertDateTime = function (date) {
        return this.utilityService.convertDateTime(date);
    };
    ;
    PostDisplayComponent = __decorate([
        core_1.Component({
            selector: 'posts',
            templateUrl: './app/components/posts/post-display.component.html'
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostsService, utility_service_1.UtilityService, auth_service_1.AuthService, router_1.ActivatedRoute])
    ], PostDisplayComponent);
    return PostDisplayComponent;
}());
exports.PostDisplayComponent = PostDisplayComponent;
//# sourceMappingURL=post-display.component.js.map