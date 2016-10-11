import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { accountRoutes, accountRouting } from './components/account/account.routes';
import { feedbacksRoutes, feedbacksRouting } from './components/feedbacks/feedbacks.routes';
import { postsRoutes, postsRouting } from './components/posts/posts.routes';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
