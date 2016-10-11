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
var user_1 = require('../domain/users/user');
var data_service_1 = require('./data.service');
var AuthService = (function () {
    function AuthService(router, dataService) {
        this.router = router;
        this.dataService = dataService;
    }
    AuthService.prototype.user = function (user) {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }
        var userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            user = new user_1.User(userData.Id, userData.Username, userData.AuthKey);
        }
        return user ? user : undefined;
    };
    AuthService.prototype.isLoggedIn = function () {
        return this.user(undefined) !== undefined;
    };
    AuthService.prototype.setAuth = function (res) {
        var data = res.json();
        if (data && data.User) {
            localStorage.setItem('user', JSON.stringify(data.User));
        }
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.dataService.post('api/account/logout')
            .subscribe(function (res) {
            localStorage.clear();
            _this.router.navigate(['/home']);
        });
    };
    AuthService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [router_1.Router, data_service_1.DataService])
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map