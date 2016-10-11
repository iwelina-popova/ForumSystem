import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermissionsRouteGuard } from '../../core/guards/permissions-route-guard';
import { PostsComponent } from './posts.component';
import { PostsTaggedComponent } from './posts-tagged.component';
import { PostDisplayComponent } from './post-display.component';
import { PostsCreateComponent } from './create-post.component';

export const postsRoutes: Routes = [
    {
        path: 'posts',
        component: PostsComponent,
        children: [
            {
                path: 'ask',
                component: PostsCreateComponent,
                canActivate: [PermissionsRouteGuard]
            },
            { path: 'tagged', component: PostsTaggedComponent },
            { path: ':{id}', component: PostDisplayComponent }
        ]
    }
];

export const postsRouting: ModuleWithProviders = RouterModule.forChild(postsRoutes);