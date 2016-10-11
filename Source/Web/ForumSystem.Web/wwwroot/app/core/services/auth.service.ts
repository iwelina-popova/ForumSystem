import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from '../domain/users/user';
import { DataService } from './data.service';

@Injectable()
export class AuthService {
        
    constructor(private router: Router,
        private dataService: DataService) { }

    user(user: User): User {
        if (user) {
            localStorage.setItem('user', JSON.stringify(user));
        }

        let userData = JSON.parse(localStorage.getItem('user'));
        if (userData) {
            user = new User(userData.Id, userData.Username, userData.AuthKey);
        }

        return user ? user : undefined;
    }

    isLoggedIn(): boolean {
        return this.user(undefined) !== undefined;
    }

    setAuth(res: any): void {
        var data = res.json();
        if (data && data.User) {
            localStorage.setItem('user', JSON.stringify(data.User));
        }
    }

    logout() {
        this.dataService.post('api/account/logout')
            .subscribe(res => {
                localStorage.clear();
                this.router.navigate(['/home']);
            });
    }
}