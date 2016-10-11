import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Feedback } from '../../core/domain/feedback';
import { FeedbacksService } from './feedbacks.service';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
    selector: 'feedbacks',
    templateUrl: './app/components/feedbacks/create-feedback.component.html'
})
export class FeedbacksCreateComponent implements OnInit {
    private newFeedback: Feedback;
    private errors: string[];

    constructor(private feedbacksService: FeedbacksService,
        private router: Router,
        private notificationService: NotificationService,
        private authService: AuthService,
        public toastr: ToastsManager) {
    }

    ngOnInit() {
        this.newFeedback = new Feedback('', '', '');
    };

    create(newFeedback: Feedback) {
        this.feedbacksService.createFeedback(this.newFeedback)
            .subscribe(res => {
                this.toastr.success('Feedback was successfully created');
                this.router.navigate(['/home']);
            },
            error => console.error('Error: ' + error));
    };
}