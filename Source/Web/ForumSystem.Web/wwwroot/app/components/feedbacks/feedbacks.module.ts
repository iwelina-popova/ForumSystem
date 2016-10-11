import { NgModule }       from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { CommonModule }   from '@angular/common';
import { MomentModule } from 'angular2-moment/src/index';

import { DataService } from '../../core/services/data.service';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { FeedbacksService } from './feedbacks.service';

import { FeedbacksComponent } from './feedbacks.component';
import { FeedbacksDetailsComponent } from './feedbacks-details.component';
import { FeedbacksCreateComponent }   from './create-feedback.component';

import { feedbacksRouting } from './feedbacks.routes';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MomentModule,
        feedbacksRouting
    ],
    declarations: [
        FeedbacksComponent,
        FeedbacksDetailsComponent,
        FeedbacksCreateComponent
    ],

    providers: [
        DataService,
        AuthService,
        NotificationService,
        FeedbacksService
    ]
})
export class FeedbacksModule { }