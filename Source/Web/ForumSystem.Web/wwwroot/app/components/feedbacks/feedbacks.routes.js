"use strict";
var router_1 = require('@angular/router');
var permissions_route_guard_1 = require('../../core/guards/permissions-route-guard');
var feedbacks_component_1 = require('./feedbacks.component');
var feedbacks_details_component_1 = require('./feedbacks-details.component');
var create_feedback_component_1 = require('./create-feedback.component');
exports.feedbacksRoutes = [
    {
        path: 'feedbacks',
        component: feedbacks_component_1.FeedbacksComponent,
        children: [
            {
                path: 'all',
                component: feedbacks_details_component_1.FeedbacksDetailsComponent,
                canActivate: [permissions_route_guard_1.PermissionsRouteGuard]
            },
            { path: 'create', component: create_feedback_component_1.FeedbacksCreateComponent }
        ]
    }
];
exports.feedbacksRouting = router_1.RouterModule.forChild(exports.feedbacksRoutes);
//# sourceMappingURL=feedbacks.routes.js.map