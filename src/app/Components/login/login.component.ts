import {
    Component, OnDestroy, OnInit
} from '@angular/core';
import { Router } from '@angular/router';
import { UserModel } from '../../Models';
import { AuthenticationService } from '../../Services';

@Component({
    selector: 'sh-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy, OnInit {
    private user: UserModel;
    private loginSubscription: any;
    private login: boolean = true;

    constructor(private authService: AuthenticationService, private router: Router) { }

    public loginClick(): void {
        let result = this.authService.login(this.user);

        this.loginSubscription = result.subscribe(result => {
            this.router.navigate(['/home']);
        });
    }

    public registerClick(): void {
        let result = this.authService.register(this.user);
        debugger;
        this.loginSubscription = result.subscribe(result => {
            this.router.navigate(['/home']);
        });
    }

    ngOnInit(): void {
        this.user = new UserModel();
    }

    ngOnDestroy(): void {
        if (this.loginSubscription) {
            this.loginSubscription.unsubscribe();
        }
    }
}