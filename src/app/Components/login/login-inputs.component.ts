import { Component, Input, Output, EventEmitter } from '@angular/core';
import { UserModel } from '../../Models';

@Component({
  selector: 'sh-login-inputs',
  templateUrl: './login-inputs.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginInputsComponent {
  @Input() userModel: UserModel;
  @Output() loginClicked: EventEmitter<any> = new EventEmitter();
  @Output() registerClicked: EventEmitter<any> = new EventEmitter();

  loginClick() {
    this.loginClicked.emit();
  }

  registerClick() {
    this.registerClicked.emit();
  }
}