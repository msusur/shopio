import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { UserModel } from '../Models';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from './storage.service';

import 'rxjs/add/observable/of';
import 'rxjs/add/operator/delay';


@Injectable()
export class AuthenticationService {
    public redirectAfterLoginTo: string;
    private loggedIn: boolean = false;

    constructor(private storage: LocalStorageService, private http: Http) { }

    public isUserLoggedIn(): boolean {
        return this.loggedIn;
    }

    public login(user: UserModel): Observable<boolean> {
        this.loggedIn = true;
        return Observable.of(true).delay(1000);
    }

    public register(user: UserModel): Observable<boolean> {
        this.loggedIn = true;

        return this.http.post('/api/account/register', user).map(response => response.json().result);
    }

    public logout(): Observable<boolean> {
        this.loggedIn = false;
        return Observable.of(true).delay(1000);
    }

    public getToken(): string {
        return '';
    }
}