"use strict";
var router_1 = require('@angular/router');
var permissions_route_guard_1 = require('../../core/guards/permissions-route-guard');
var administration_component_1 = require('./administration.component');
exports.administrationRoutes = [
    {
        path: 'admin/posts',
        component: administration_component_1.AdministrationComponent,
        canActivate: [permissions_route_guard_1.PermissionsRouteGuard]
    }
];
exports.administrationRouting = router_1.RouterModule.forChild(exports.administrationRoutes);
//# sourceMappingURL=administration.routes.js.map