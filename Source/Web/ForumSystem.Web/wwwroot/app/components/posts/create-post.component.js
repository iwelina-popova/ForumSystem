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
var forms_1 = require('@angular/forms');
var posts_service_1 = require('./posts.service');
var auth_service_1 = require('../../core/services/auth.service');
var notification_service_1 = require('../../core/services/notification.service');
var PostsCreateComponent = (function () {
    function PostsCreateComponent(postsService, formBuilder, router, notificationService, authService) {
        this.postsService = postsService;
        this.formBuilder = formBuilder;
        this.router = router;
        this.notificationService = notificationService;
        this.authService = authService;
    }
    PostsCreateComponent.prototype.ngOnInit = function () {
        this.createPostForm = this.formBuilder.group({
            Title: ['', [forms_1.Validators.required, forms_1.Validators.maxLength(100)]],
            Content: ['', forms_1.Validators.required],
            Tags: this.formBuilder.array([
                this.initTag()
            ])
        });
    };
    PostsCreateComponent.prototype.create = function (newPost) {
        var _this = this;
        this.postsService.createPost(this.createPostForm.value)
            .subscribe(function (res) {
            var data = res.json();
            _this.router.navigate(['/posts/:id', { id: data }]);
        }, function (error) { return console.error('Error: ' + error); });
    };
    ;
    PostsCreateComponent.prototype.initTag = function () {
        return this.formBuilder.group({
            Id: [''],
            Name: ['', forms_1.Validators.required]
        });
    };
    PostsCreateComponent.prototype.addTag = function () {
        var control = this.createPostForm.controls['Tags'];
        control.push(this.initTag());
    };
    PostsCreateComponent.prototype.removeTag = function (i) {
        var control = this.createPostForm.controls['Tags'];
        control.removeAt(i);
    };
    PostsCreateComponent = __decorate([
        core_1.Component({
            selector: 'post',
            templateUrl: './app/components/posts/create-post.component.html'
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostsService, forms_1.FormBuilder, router_1.Router, notification_service_1.NotificationService, auth_service_1.AuthService])
    ], PostsCreateComponent);
    return PostsCreateComponent;
}());
exports.PostsCreateComponent = PostsCreateComponent;
//# sourceMappingURL=create-post.component.js.map