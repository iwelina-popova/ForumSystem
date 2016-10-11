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
var platform_browser_1 = require('@angular/platform-browser');
var http_1 = require('@angular/http');
var common_1 = require('@angular/common');
var http_2 = require('@angular/http');
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var account_module_1 = require('./components/account/account.module');
var feedbacks_module_1 = require('./components/feedbacks/feedbacks.module');
var posts_module_1 = require('./components/posts/posts.module');
var administration_module_1 = require('./components/administration/administration.module');
var app_component_1 = require('./app.component');
var home_component_1 = require('./components/home/home.component');
var app_routes_1 = require('./app.routes');
var permissions_route_guard_1 = require('./core/guards/permissions-route-guard');
var data_service_1 = require('./core/services/data.service');
var auth_service_1 = require('./core/services/auth.service');
var utility_service_1 = require('./core/services/utility.service');
var notification_service_1 = require('./core/services/notification.service');
var AppBaseRequestOptions = (function (_super) {
    __extends(AppBaseRequestOptions, _super);
    function AppBaseRequestOptions() {
        _super.call(this);
        this.headers = new http_2.Headers();
        this.headers.append('Content-Type', 'application/json');
        this.body = '';
    }
    return AppBaseRequestOptions;
}(http_2.BaseRequestOptions));
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                ng2_toastr_1.ToastModule,
                account_module_1.AccountModule,
                feedbacks_module_1.FeedbacksModule,
                posts_module_1.PostsModule,
                administration_module_1.AdministrationModule,
                app_routes_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                home_component_1.HomeComponent],
            providers: [
                data_service_1.DataService,
                auth_service_1.AuthService,
                utility_service_1.UtilityService,
                notification_service_1.NotificationService,
                permissions_route_guard_1.PermissionsRouteGuard,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
                { provide: http_2.RequestOptions, useClass: AppBaseRequestOptions }],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map