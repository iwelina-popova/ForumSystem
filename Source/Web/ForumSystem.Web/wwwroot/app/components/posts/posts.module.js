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
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var primeng_1 = require('primeng/primeng');
var index_1 = require('angular2-moment/src/index');
var data_service_1 = require('../../core/services/data.service');
var auth_service_1 = require('../../core/services/auth.service');
var notification_service_1 = require('../../core/services/notification.service');
var posts_service_1 = require('./posts.service');
var posts_component_1 = require('./posts.component');
var posts_tagged_component_1 = require('./posts-tagged.component');
var post_display_component_1 = require('./post-display.component');
var create_post_component_1 = require('./create-post.component');
var posts_routes_1 = require('./posts.routes');
var PostsModule = (function () {
    function PostsModule() {
    }
    PostsModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule, forms_1.ReactiveFormsModule,
                primeng_1.ButtonModule, primeng_1.FieldsetModule, primeng_1.DialogModule, primeng_1.EditorModule,
                index_1.MomentModule,
                posts_routes_1.postsRouting
            ],
            declarations: [
                posts_component_1.PostsComponent,
                posts_tagged_component_1.PostsTaggedComponent,
                post_display_component_1.PostDisplayComponent,
                create_post_component_1.PostsCreateComponent
            ],
            providers: [
                data_service_1.DataService,
                auth_service_1.AuthService,
                notification_service_1.NotificationService,
                posts_service_1.PostsService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], PostsModule);
    return PostsModule;
}());
exports.PostsModule = PostsModule;
//# sourceMappingURL=posts.module.js.map