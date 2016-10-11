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
var data_service_1 = require('../../core/services/data.service');
var AdministrationService = (function () {
    function AdministrationService(adminService) {
        this.adminService = adminService;
        this.administrationApi = 'api/administration/posts';
    }
    AdministrationService.prototype.getAllPosts = function () {
        return this.adminService.getAll(this.administrationApi);
    };
    AdministrationService.prototype.createPost = function (post) {
        return this.adminService.post(this.administrationApi + '/create', post);
    };
    AdministrationService.prototype.updatePost = function (post) {
        return this.adminService.put(this.administrationApi + '/update', post);
    };
    AdministrationService.prototype.deletePost = function (id) {
        return this.adminService.delete(this.administrationApi + '/delete', id);
    };
    AdministrationService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [data_service_1.DataService])
    ], AdministrationService);
    return AdministrationService;
}());
exports.AdministrationService = AdministrationService;
//# sourceMappingURL=administration.service.js.map