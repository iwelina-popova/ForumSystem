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
var ng2_toastr_1 = require('ng2-toastr/ng2-toastr');
var feedback_1 = require('../../core/domain/feedback');
var feedbacks_service_1 = require('./feedbacks.service');
var auth_service_1 = require('../../core/services/auth.service');
var notification_service_1 = require('../../core/services/notification.service');
var FeedbacksCreateComponent = (function () {
    function FeedbacksCreateComponent(feedbacksService, router, notificationService, authService, toastr) {
        this.feedbacksService = feedbacksService;
        this.router = router;
        this.notificationService = notificationService;
        this.authService = authService;
        this.toastr = toastr;
    }
    FeedbacksCreateComponent.prototype.ngOnInit = function () {
        this.newFeedback = new feedback_1.Feedback('', '', '');
    };
    ;
    FeedbacksCreateComponent.prototype.create = function (newFeedback) {
        var _this = this;
        this.feedbacksService.createFeedback(this.newFeedback)
            .subscribe(function (res) {
            _this.toastr.success('Feedback was successfully created');
            _this.router.navigate(['/home']);
        }, function (error) { return console.error('Error: ' + error); });
    };
    ;
    FeedbacksCreateComponent = __decorate([
        core_1.Component({
            selector: 'feedbacks',
            templateUrl: './app/components/feedbacks/create-feedback.component.html'
        }), 
        __metadata('design:paramtypes', [feedbacks_service_1.FeedbacksService, router_1.Router, notification_service_1.NotificationService, auth_service_1.AuthService, ng2_toastr_1.ToastsManager])
    ], FeedbacksCreateComponent);
    return FeedbacksCreateComponent;
}());
exports.FeedbacksCreateComponent = FeedbacksCreateComponent;
//# sourceMappingURL=create-feedback.component.js.map