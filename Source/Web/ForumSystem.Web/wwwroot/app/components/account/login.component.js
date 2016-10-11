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
var user_1 = require('../../core/domain/users/user');
var account_service_1 = require('./account.service');
var auth_service_1 = require('../../core/services/auth.service');
var notification_service_1 = require('../../core/services/notification.service');
var LoginComponent = (function () {
    function LoginComponent(accountService, authService, notificationService, router) {
        this.accountService = accountService;
        this.authService = authService;
        this.notificationService = notificationService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User('', '', '');
    };
    LoginComponent.prototype.login = function (model) {
        var _this = this;
        this.accountService.login(this.user)
            .subscribe(function (res) {
            _this.authService.setAuth(res);
            _this.router.navigate(['/home']);
        }, function (errors) {
            _this.errors = errors;
        });
    };
    ;
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './app/components/account/login.component.html'
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService, auth_service_1.AuthService, notification_service_1.NotificationService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map