import { Injectable } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

declare var alertify: any;

@Injectable()
export class NotificationService {
    constructor(public toastr: ToastsManager) {
    }

    printSuccessMessage(message: string) {
        this.toastr.success(message);
    }

    printErrorMessage(message: string) {
        this.toastr.error(message);
    }
}