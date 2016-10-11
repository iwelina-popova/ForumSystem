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
var router_1 = require('@angular/router');
var feedbacks_service_1 = require('./feedbacks.service');
var utility_service_1 = require('../../core/services/utility.service');
var notification_service_1 = require('../../core/services/notification.service');
var paginated_1 = require('../../core/common/paginated');
var FeedbacksDetailsComponent = (function (_super) {
    __extends(FeedbacksDetailsComponent, _super);
    function FeedbacksDetailsComponent(feedbacksService, router, notificationService, utilityService) {
        _super.call(this, 0, 0, 0);
        this.feedbacksService = feedbacksService;
        this.router = router;
        this.notificationService = notificationService;
        this.utilityService = utilityService;
    }
    FeedbacksDetailsComponent.prototype.ngOnInit = function () {
        this.get(0);
    };
    ;
    FeedbacksDetailsComponent.prototype.get = function (page) {
        var _this = this;
        this.feedbacksService.getFeedbacks(page)
            .subscribe(function (res) {
            var data = res.json();
            _this.feedbacks = data.Items;
            _this.page = data.Page;
            _this.pagesCount = data.TotalPages;
            _this.totalCount = data.TotalCount;
        }, function (error) { return console.error('Error: ' + error); });
    };
    ;
    FeedbacksDetailsComponent.prototype.convertDateTime = function (date) {
        return this.utilityService.convertDateTime(date);
    };
    ;
    FeedbacksDetailsComponent = __decorate([
        core_1.Component({
            selector: 'feedbacks',
            templateUrl: './app/components/feedbacks/feedbacks-details.component.html'
        }), 
        __metadata('design:paramtypes', [feedbacks_service_1.FeedbacksService, router_1.Router, notification_service_1.NotificationService, utility_service_1.UtilityService])
    ], FeedbacksDetailsComponent);
    return FeedbacksDetailsComponent;
}(paginated_1.Paginated));
exports.FeedbacksDetailsComponent = FeedbacksDetailsComponent;
//# sourceMappingURL=feedbacks-details.component.js.map