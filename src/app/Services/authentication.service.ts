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

    private static TOKEN_KEY: string = 'login:token';

    constructor(private storage: LocalStorageService, private http: Http) { }

    public login(user: UserModel): Observable<boolean> {
        return this.http.post('/api/account/login', user)
            .map(response => response.json())
            .do(result => this.setToken(result.token));
    }

    public register(user: UserModel): Observable<boolean> {
        return this.http.post('/api/account/register', user)
            .map(response => response.json().result)
            .do(result => this.setToken(result.token));
    }

    public logout(): Observable<boolean> {
        let token = this.getToken();
        return this.http.post('/api/account/logout', token)
            .map(response => response.json().result)
            .do(result => this.setToken(''));
    }

    public getToken(): string {
        return this.storage.get(AuthenticationService.TOKEN_KEY);
    }

    public setToken(token: string) {
        this.storage.set(AuthenticationService.TOKEN_KEY, token);
    }

    public isUserLoggedIn(): boolean {
        return this.getToken().length > 0;
    }
}