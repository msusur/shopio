import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../Models';
import { AuthenticationService } from '../../Services';

@Component({
    selector: 'sh-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
    private userModel: UserModel;
    private loginSubscription: any;
    private login: boolean = true;

    constructor(private authService: AuthenticationService, private router: Router) { }

    public loginClick(): void {
        let result = this.authService.login(this.userModel);

        this.loginSubscription = result.subscribe(result => {
            this.router.navigate(['/home']);
        });
    }

    public registerClick(): void {
        let result = this.authService.register(this.userModel);

        this.loginSubscription = result.subscribe(result => {
            this.router.navigate(['/home']);
        });
    }

    ngOnDestroy(): void {
        if (this.loginSubscription) {
            this.loginSubscription.unsubscribe();
        }
    }
}