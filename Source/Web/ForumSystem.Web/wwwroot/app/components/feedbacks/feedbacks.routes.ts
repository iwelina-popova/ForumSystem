import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermissionsRouteGuard } from '../../core/guards/permissions-route-guard';
import { FeedbacksComponent } from './feedbacks.component';
import { FeedbacksDetailsComponent } from './feedbacks-details.component';
import { FeedbacksCreateComponent } from './create-feedback.component';

export const feedbacksRoutes: Routes = [
    {
        path: 'feedbacks',
        component: FeedbacksComponent,
        children: [
            {
                path: 'all',
                component: FeedbacksDetailsComponent,
                canActivate: [PermissionsRouteGuard]
            },
            { path: 'create', component: FeedbacksCreateComponent }
        ]
    }
];

export const feedbacksRouting: ModuleWithProviders = RouterModule.forChild(feedbacksRoutes);