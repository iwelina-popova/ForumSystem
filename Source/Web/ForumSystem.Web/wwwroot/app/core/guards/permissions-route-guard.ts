import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service'

@Injectable()
export class PermissionsRouteGuard implements CanActivate {
    constructor(private authService: AuthService,
        private router: Router) {
    }

    canActivate() {
        var result = this.authService.isLoggedIn();
        if (result) {
            return true;
        } else {
            this.router.navigate(['account/login']);
            return false;
        }
    }
}