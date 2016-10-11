/// <reference path="../../typings/globals/es6-shim/index.d.ts" />

import { Component, OnInit } from '@angular/core';
import { enableProdMode } from '@angular/core';
import { Location } from '@angular/common';
import 'rxjs/add/operator/map';

import { AuthService } from './core/services/auth.service';

enableProdMode();

@Component({
    selector: 'fs-app',
    templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit {

    constructor(private location: Location,
        private authService: AuthService) { }

    ngOnInit() {
        this.location.go('/');
    }

    isUserLoggedIn(): boolean {
        return this.authService.isLoggedIn();
    }

    getUserName(): string {
        if (this.isUserLoggedIn()) {
            var userName = this.authService.user(undefined).Username;
            return userName;
        }
        else {
            return 'Account';
        }
    }

    logOut(): void {
        this.authService.logout();
    }
}
