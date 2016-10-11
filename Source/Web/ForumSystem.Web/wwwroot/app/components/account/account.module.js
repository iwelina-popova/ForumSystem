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
var data_service_1 = require('../../core/services/data.service');
var auth_service_1 = require('../../core/services/auth.service');
var notification_service_1 = require('../../core/services/notification.service');
var account_service_1 = require('./account.service');
var account_component_1 = require('./account.component');
var login_component_1 = require('./login.component');
var register_component_1 = require('./register.component');
var account_routes_1 = require('./account.routes');
var AccountModule = (function () {
    function AccountModule() {
    }
    AccountModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                account_routes_1.accountRouting
            ],
            declarations: [
                account_component_1.AccountComponent,
                login_component_1.LoginComponent,
                register_component_1.RegisterComponent
            ],
            providers: [
                data_service_1.DataService,
                auth_service_1.AuthService,
                notification_service_1.NotificationService,
                account_service_1.AccountService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AccountModule);
    return AccountModule;
}());
exports.AccountModule = AccountModule;
//# sourceMappingURL=account.module.js.map