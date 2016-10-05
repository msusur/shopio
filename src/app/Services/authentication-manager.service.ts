import { Injectable } from '@angular/core';
import {
    CanActivate, Router,
    ActivatedRouteSnapshot,
    RouterStateSnapshot
} from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthenticationManager implements CanActivate {

    constructor(private authService: AuthenticationService, private router: Router) {
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if(this.authService.isUserLoggedIn()){
            return true;
        }

        this.authService.redirectAfterLoginTo = state.url;
        this.router.navigate(['/login']);
        return false;
    }
}