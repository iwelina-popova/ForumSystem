import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule, RouterOutlet } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
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
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
