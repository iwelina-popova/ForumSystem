import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { Location, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Headers, RequestOptions, BaseRequestOptions} from '@angular/http';

import { ToastModule } from 'ng2-toastr/ng2-toastr';
import { AccountModule } from './components/account/account.module';
import { FeedbacksModule } from './components/feedbacks/feedbacks.module';
import { PostsModule } from './components/posts/posts.module';
import { AdministrationModule } from './components/administration/administration.module';
import { AppComponent }  from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { routing } from './app.routes';

import { PermissionsRouteGuard } from './core/guards/permissions-route-guard';

import { DataService } from './core/services/data.service';
import { AuthService } from './core/services/auth.service';
import { HttpErrorHandler } from './core/services/httpErrorHandler';
import { UtilityService } from './core/services/utility.service';
import { NotificationService } from './core/services/notification.service';

class AppBaseRequestOptions extends BaseRequestOptions {
    headers: Headers = new Headers();

    constructor() {
        super();
        this.headers.append('Content-Type', 'application/json');
        this.body = '';
    }
}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        ToastModule,
        AccountModule,
        FeedbacksModule,
        PostsModule,
        AdministrationModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        NotFoundComponent],
    providers: [
        DataService,
        AuthService,
        UtilityService,
        NotificationService,
        PermissionsRouteGuard,
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        { provide: RequestOptions, useClass: AppBaseRequestOptions }],
    bootstrap: [AppComponent]
})
export class AppModule { }

