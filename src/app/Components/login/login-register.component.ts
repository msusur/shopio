import {
  Component, Input, Output, EventEmitter
} from '@angular/core';
import { UserModel, RegistrationModel } from '../../Models';

@Component({
  selector: 'sh-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginRegisterComponent {
  @Input() userModel: RegistrationModel;
  @Output() registerClicked: EventEmitter<any> = new EventEmitter();
  @Output() cancelClicked: EventEmitter<any> = new EventEmitter();
  private errorMessage: string;

  registerClick() {
    let allow = !!(this.validatePassword(this.userModel.Password) && this.userModel.Password === this.userModel.RepeatPassword);
    allow = allow && this.validateUsername(this.userModel.Username) && this.userModel.Username === this.userModel.RepeatUsername;
    if (allow) {
      this.registerClicked.emit();
    } else {
      this.errorMessage = "Invalid username or password.";
    }
  }

  cancelClick() {
    this.cancelClicked.emit();
  }

  validatePassword(value: string): boolean {
    return value && value.length > 3;
  }

  validateUsername(value: string): boolean {
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var regex = new RegExp(emailRegex);
    return value && regex.test(value);
  }
}