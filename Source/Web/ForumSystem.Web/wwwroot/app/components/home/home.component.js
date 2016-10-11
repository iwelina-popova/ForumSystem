"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var paginated_1 = require('../../core/common/paginated');
var posts_service_1 = require('../posts/posts.service');
var data_service_1 = require('../../core/services/data.service');
var auth_service_1 = require('../../core/services/auth.service');
var utility_service_1 = require('../../core/services/utility.service');
var HomeComponent = (function (_super) {
    __extends(HomeComponent, _super);
    function HomeComponent(postsService, dataService, authService, utilityService) {
        _super.call(this, 0, 0, 0);
        this.postsService = postsService;
        this.dataService = dataService;
        this.authService = authService;
        this.utilityService = utilityService;
        this.postsApi = 'api/posts';
        this.tagsApi = 'api/tags';
        this.voteApi = 'api/votes/vote';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getPosts(0);
    };
    ;
    HomeComponent.prototype.getPosts = function (page) {
        var _this = this;
        this.postsService.getPosts(page)
            .subscribe(function (res) {
            var data = res.json();
            _this.posts = data.Items;
            _this.posts.forEach(function (post) {
                post.CreatedOn = moment(post.CreatedOn).fromNow();
            });
            _this.page = data.Page;
            _this.pagesCount = data.TotalPages;
            _this.totalCount = data.TotalCount;
        }, function (error) { return console.error('Error: ' + error); });
    };
    ;
    HomeComponent.prototype.convertDateTime = function (date) {
        return this.utilityService.convertDateTime(date);
    };
    ;
    HomeComponent.prototype.vote = function (voteType, postId) {
        if (this.authService.isLoggedIn()) {
            var data = JSON.stringify({ postId: postId, voteType: voteType });
            this.dataService.post(this.voteApi, data)
                .subscribe(function (res) {
                var data = res.json();
                $("div[data-action='votesCount'][id='" + postId + "']")
                    .html(data.Count);
            });
        }
    };
    HomeComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: './app/components/home/home.component.html'
        }), 
        __metadata('design:paramtypes', [posts_service_1.PostsService, data_service_1.DataService, auth_service_1.AuthService, utility_service_1.UtilityService])
    ], HomeComponent);
    return HomeComponent;
}(paginated_1.Paginated));
exports.HomeComponent = HomeComponent;
//# sourceMappingURL=home.component.js.map