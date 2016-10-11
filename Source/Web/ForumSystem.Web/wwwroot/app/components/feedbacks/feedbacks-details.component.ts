import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';

import { Feedback } from '../../core/domain/feedback';
import { OperationResult } from '../../core/domain/operation-result';
import { FeedbacksService } from './feedbacks.service';
import { UtilityService } from '../../core/services/utility.service';
import { NotificationService } from '../../core/services/notification.service';
import { Paginated } from '../../core/common/paginated';

@Component({
    selector: 'feedbacks',
    templateUrl: './app/components/feedbacks/feedbacks-details.component.html'
})
export class FeedbacksDetailsComponent extends Paginated implements OnInit {
    private feedbacks: Array<Feedback>;
    private errors: string[];

    constructor(public feedbacksService: FeedbacksService,
        private router: Router,
        private notificationService: NotificationService,
        private utilityService: UtilityService) {
        super(0, 0, 0);
    }

    ngOnInit() {
        this.get(0);
    };

    get(page: number) {
        this.feedbacksService.getFeedbacks(page)
            .subscribe(res => {
                var data: any = res.json();

                this.feedbacks = data.Items;
                this.page = data.Page;
                this.pagesCount = data.TotalPages;
                this.totalCount = data.TotalCount;
            },
            error => console.error('Error: ' + error));
    };

    convertDateTime(date: Date) {
        return this.utilityService.convertDateTime(date);
    };
}