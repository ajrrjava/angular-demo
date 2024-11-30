import { Injectable, inject } from '@angular/core';
import { CanActivate, Router, CanActivateFn, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { AuthService } from './services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
    const authService = inject(AuthService);
    const router = inject(Router);

    if (authService.isAuthenticated() == false) {
        router.navigate(['/login']);
        return false;
    }

    return authService.isAuthenticated()
};

