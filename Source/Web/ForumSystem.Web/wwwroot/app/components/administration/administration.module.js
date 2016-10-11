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
var primeng_1 = require('primeng/primeng'); //accordion and accordion tab
var primeng_2 = require('primeng/primeng'); //api
var primeng_3 = require('primeng/primeng');
var dialog_1 = require('primeng/components/dialog/dialog');
var button_1 = require('primeng/components/button/button');
var data_service_1 = require('../../core/services/data.service');
var auth_service_1 = require('../../core/services/auth.service');
var notification_service_1 = require('../../core/services/notification.service');
var administration_service_1 = require('./administration.service');
var administration_component_1 = require('./administration.component');
var administration_routes_1 = require('./administration.routes');
var AdministrationModule = (function () {
    function AdministrationModule() {
    }
    AdministrationModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule, forms_1.ReactiveFormsModule,
                primeng_1.AccordionModule, primeng_2.InputTextModule, primeng_3.DataTableModule, dialog_1.DialogModule, button_1.ButtonModule, primeng_3.EditorModule, primeng_3.SharedModule,
                administration_routes_1.administrationRouting
            ],
            declarations: [
                administration_component_1.AdministrationComponent
            ],
            providers: [
                data_service_1.DataService,
                auth_service_1.AuthService,
                notification_service_1.NotificationService,
                administration_service_1.AdministrationService
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], AdministrationModule);
    return AdministrationModule;
}());
exports.AdministrationModule = AdministrationModule;
//# sourceMappingURL=administration.module.js.map