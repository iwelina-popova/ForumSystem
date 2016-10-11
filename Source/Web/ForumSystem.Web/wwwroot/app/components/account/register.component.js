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
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var register_model_1 = require('../../core/domain/users/register-model');
var account_service_1 = require('./account.service');
var notification_service_1 = require('../../core/services/notification.service');
var RegisterComponent = (function () {
    function RegisterComponent(accountService, router, formBuilder, notificationService, toastr) {
        this.accountService = accountService;
        this.router = router;
        this.formBuilder = formBuilder;
        this.notificationService = notificationService;
        this.toastr = toastr;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.newUser = new register_model_1.RegisterModel('', '', '', '');
        this.registerForm = this.formBuilder.group({
            username: ['', forms_1.Validators.required],
            email: ['', forms_1.Validators.required],
            passwords: this.formBuilder.group({
                password: ['', forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.minLength(6)])],
                confirmPassword: ['', forms_1.Validators.required]
            })
        });
    };
    RegisterComponent.prototype.register = function (model) {
        var _this = this;
        this.accountService.register(this.newUser)
            .subscribe(function (res) {
            _this.notificationService.printSuccessMessage('User was successfully created');
            _this.router.navigate(['account/login']);
        }, function (error) { return console.error('Error: ' + error); });
    };
    ;
    RegisterComponent = __decorate([
        core_1.Component({
            selector: 'register',
            providers: [account_service_1.AccountService, notification_service_1.NotificationService],
            templateUrl: './app/components/account/register.component.html'
        }), 
        __metadata('design:paramtypes', [account_service_1.AccountService, router_1.Router, forms_1.FormBuilder, notification_service_1.NotificationService, ng2_toastr_1.ToastsManager])
    ], RegisterComponent);
    return RegisterComponent;
}());
exports.RegisterComponent = RegisterComponent;
//# sourceMappingURL=register.component.js.map