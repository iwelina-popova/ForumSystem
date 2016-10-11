import { Injectable } from '@angular/core';

import { User } from '../../core/domain/users/user';
import { RegisterModel } from '../../core/domain/users/register-model';
import { DataService } from '../../core/services/data.service';

@Injectable()
export class AccountService {
    private accountRegisterApi: string = 'api/account/register';
    private accountLogInApi: string = 'api/account/login';

    constructor(private accountService: DataService) {
    }

    register(newUser: RegisterModel) {
        return this.accountService.post(this.accountRegisterApi, newUser);
    }

    login(creds: User) {
        return this.accountService.post(this.accountLogInApi, creds);
    }
}