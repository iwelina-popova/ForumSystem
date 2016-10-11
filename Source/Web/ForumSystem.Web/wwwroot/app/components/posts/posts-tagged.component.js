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
var data_service_1 = require('../../core/services/data.service');
var utility_service_1 = require('../../core/services/utility.service');
var PostsTaggedComponent = (function (_super) {
    __extends(PostsTaggedComponent, _super);
    function PostsTaggedComponent(dataService, utilityService) {
        _super.call(this, 0, 0, 0);
        this.dataService = dataService;
        this.utilityService = utilityService;
        this.postsApi = 'api/posts/tagged';
    }
    PostsTaggedComponent.prototype.ngOnInit = function () {
        this.getPosts(0);
    };
    ;
    PostsTaggedComponent.prototype.getPosts = function (page) {
        var _this = this;
        this.dataService.getByPage(this.postsApi, page, 5)
            .subscribe(function (res) {
            var data = res.json();
            _this.posts = data.Items;
            _this.page = data.Page;
            _this.pagesCount = data.TotalPages;
            _this.totalCount = data.TotalCount;
        }, function (error) { return console.error('Error: ' + error); });
    };
    ;
    PostsTaggedComponent.prototype.convertDateTime = function (date) {
        return this.utilityService.convertDateTime(date);
    };
    ;
    PostsTaggedComponent = __decorate([
        core_1.Component({
            selector: 'home',
            templateUrl: './app/components/posts/posts-tagged.component.html'
        }), 
        __metadata('design:paramtypes', [data_service_1.DataService, utility_service_1.UtilityService])
    ], PostsTaggedComponent);
    return PostsTaggedComponent;
}(paginated_1.Paginated));
exports.PostsTaggedComponent = PostsTaggedComponent;
//# sourceMappingURL=posts-tagged.component.js.map