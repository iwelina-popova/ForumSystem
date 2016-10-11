import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Response } from '@angular/http';

import { User } from '../../core/domain/users/user';
import { AccountService } from './account.service';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { OperationResult } from '../../core/domain/operation-result';

@Component({
    selector: 'login',
    templateUrl: './app/components/account/login.component.html'
})
export class LoginComponent implements OnInit {
    private user: User;
    private errors: string[];

    constructor(private accountService: AccountService,
        private authService: AuthService,
        public notificationService: NotificationService,
        public router: Router) { }

    ngOnInit() {
        this.user = new User('', '', '');
    }

    login(model: any): void {
        this.accountService.login(this.user)
            .subscribe((res: Response) => {
                this.authService.setAuth(res);
                this.router.navigate(['/home']);
            },
            (errors: string[]) => {
                this.errors = errors;
            });
    };
}