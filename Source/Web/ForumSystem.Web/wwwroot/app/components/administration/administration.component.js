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
var administration_service_1 = require('./administration.service');
var auth_service_1 = require('../../core/services/auth.service');
var admin_post_1 = require('../../core/domain/posts/admin-post');
var AdministrationComponent = (function () {
    function AdministrationComponent(adminService, authService) {
        this.adminService = adminService;
        this.authService = authService;
    }
    AdministrationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.adminService.getAllPosts()
            .subscribe(function (res) {
            var data = res.json();
            _this.posts = data;
            _this.posts.forEach(function (post) {
                post.CreatedOnString = moment(post.CreatedOn).format('MMMM Do YYYY, h:mm:ss a');
            });
            console.log(_this.posts);
        });
    };
    AdministrationComponent.prototype.save = function () {
        var _this = this;
        var errorDiv = $('#errorMessage');
        if (!this.post.Title || !this.post.Content) {
            errorDiv.show();
        }
        else if (this.isNewPost) {
            this.adminService.createPost(this.post)
                .subscribe(function (res) {
                _this.posts.push(_this.post);
                errorDiv.hide();
                _this.displayDialog = false;
            });
        }
        else {
            this.posts[this.findSelectedPostIndex()] = this.post;
            this.adminService.updatePost(this.post)
                .subscribe(function (res) {
                _this.post = null;
                errorDiv.hide();
                _this.displayDialog = false;
            });
        }
    };
    AdministrationComponent.prototype.delete = function () {
        var _this = this;
        var index = this.findSelectedPostIndex();
        this.adminService.deletePost(this.post.Id)
            .subscribe(function (res) {
            _this.displayDialog = false;
            _this.posts[index].IsDeleted = true;
        });
    };
    AdministrationComponent.prototype.onRowSelect = function (event) {
        this.isNewPost = false;
        this.post = this.clonePost(event.data);
        this.displayDialog = true;
    };
    AdministrationComponent.prototype.clonePost = function (p) {
        var post = new admin_post_1.AdminPost(0, '', '', '', new Date(), new Date(), false);
        for (var prop in p) {
            post[prop] = p[prop];
        }
        return post;
    };
    AdministrationComponent.prototype.showDialogToAdd = function () {
        this.isNewPost = true;
        this.cleanNewPost();
        this.displayDialog = true;
    };
    AdministrationComponent.prototype.findSelectedPostIndex = function () {
        return this.posts.indexOf(this.selectedPost);
    };
    AdministrationComponent.prototype.cleanNewPost = function () {
        this.post = new admin_post_1.AdminPost(0, '', '', '', new Date(), new Date(), false);
    };
    AdministrationComponent = __decorate([
        core_1.Component({
            selector: 'administration',
            templateUrl: './app/components/administration/administration.component.html'
        }), 
        __metadata('design:paramtypes', [administration_service_1.AdministrationService, auth_service_1.AuthService])
    ], AdministrationComponent);
    return AdministrationComponent;
}());
exports.AdministrationComponent = AdministrationComponent;
//# sourceMappingURL=administration.component.js.map