import { Injectable } from '@angular/core';
import { UserModel } from '../Models';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from './storage.service';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Injectable()
export class AuthenticationService {
    public redirectAfterLoginTo: string;
    private loggedIn: boolean = false;

    constructor(storage: LocalStorageService) { }

    public isUserLoggedIn(): boolean {
        return this.loggedIn;
    }

    public login(user: UserModel): Observable<boolean> {
        this.loggedIn = true;
        return Observable.of(true).delay(1000);
    }

    public register(user: UserModel): Observable<boolean> {
        this.loggedIn = true;
        return Observable.of(true).delay(1000);
    }

    public logout(): Observable<boolean> {
        this.loggedIn = false;
        return Observable.of(true).delay(1000);
    }

    public getToken(): string {
        return '';
    }
}