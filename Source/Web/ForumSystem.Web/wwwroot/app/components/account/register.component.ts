import { Component, OnInit} from '@angular/core';
import { Response } from '@angular/http';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { RegisterModel } from '../../core/domain/users/register-model';
import { OperationResult } from '../../core/domain/operation-result';
import { AccountService } from './account.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
    selector: 'register',
    providers: [AccountService, NotificationService],
    templateUrl: './app/components/account/register.component.html'
})
export class RegisterComponent implements OnInit {
    private registerForm: FormGroup;
    private newUser: RegisterModel;

    constructor(private accountService: AccountService,
        private router: Router,
        private formBuilder: FormBuilder,
        private notificationService: NotificationService,
        public toastr: ToastsManager) {
    }

    ngOnInit() {
        this.newUser = new RegisterModel('', '', '', '');

        this.registerForm = this.formBuilder.group({
            username: ['', Validators.required],
            email: ['', Validators.required],
            passwords: this.formBuilder.group({
                password: ['', Validators.compose([Validators.required, Validators.minLength(6)])],
                confirmPassword: ['', Validators.required]
            })
        });
    }

    register(model: RegisterModel): void {
        this.accountService.register(this.newUser)
            .subscribe((res: Response) => {
                this.notificationService.printSuccessMessage('User was successfully created');
                this.router.navigate(['account/login']);
            },
            error => console.error('Error: ' + error));
    };
}