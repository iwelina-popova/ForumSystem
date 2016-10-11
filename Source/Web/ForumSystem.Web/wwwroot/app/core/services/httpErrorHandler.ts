import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class HttpErrorHandler {

    constructor(private router: Router) { }

    handle(error: any) {
        if (error.status === 401) {
            sessionStorage.clear();
            this.router.navigate(['account/login']);
        } else if (error.status == 404) {
            this.router.navigate(['not-found']);
        }
    }
}