import {
  Component, Input, Output, EventEmitter
} from '@angular/core';
import { UserModel } from '../../Models';

@Component({
  selector: 'sh-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginRegisterComponent {
  @Input() userModel: UserModel;
  @Output() registerClicked: EventEmitter<any> = new EventEmitter();
  @Output() cancelClicked: EventEmitter<any> = new EventEmitter();

  registerClick() {
    this.registerClicked.emit();
  }

  cancelClick() {
    this.cancelClicked.emit();
  }
}