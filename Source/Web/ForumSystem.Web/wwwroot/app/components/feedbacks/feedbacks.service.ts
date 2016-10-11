import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';

import { Feedback } from '../../core/domain/feedback';
import { DataService } from '../../core/services/data.service';

@Injectable()
export class FeedbacksService {
    private feedbacksApi: string = 'api/feedbacks/all';
    private createFeedbackApi: string = 'api/feedbacks/create';
    private pageSize: number = 4;

    constructor(public feedbacksService: DataService) {
    }

    getFeedbacks(page: number) {
        return this.feedbacksService.getByPage(this.feedbacksApi, page, this.pageSize);
    };

    createFeedback(newFeedback: Feedback) {
        return this.feedbacksService.post(this.createFeedbackApi, newFeedback);
    };
}