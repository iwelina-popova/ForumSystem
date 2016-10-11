"use strict";
var router_1 = require('@angular/router');
var permissions_route_guard_1 = require('../../core/guards/permissions-route-guard');
var posts_component_1 = require('./posts.component');
var posts_tagged_component_1 = require('./posts-tagged.component');
var post_display_component_1 = require('./post-display.component');
var create_post_component_1 = require('./create-post.component');
exports.postsRoutes = [
    {
        path: 'posts',
        component: posts_component_1.PostsComponent,
        children: [
            {
                path: 'ask',
                component: create_post_component_1.PostsCreateComponent,
                canActivate: [permissions_route_guard_1.PermissionsRouteGuard]
            },
            { path: 'tagged', component: posts_tagged_component_1.PostsTaggedComponent },
            { path: ':{id}', component: post_display_component_1.PostDisplayComponent }
        ]
    }
];
exports.postsRouting = router_1.RouterModule.forChild(exports.postsRoutes);
//# sourceMappingURL=posts.routes.js.map