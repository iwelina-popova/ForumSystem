import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PermissionsRouteGuard } from '../../core/guards/permissions-route-guard';
import { AdministrationComponent } from './administration.component';

export const administrationRoutes: Routes = [
    {
        path: 'admin/posts',
        component: AdministrationComponent,
        canActivate: [PermissionsRouteGuard]
    }
];

export const administrationRouting: ModuleWithProviders = RouterModule.forChild(administrationRoutes);