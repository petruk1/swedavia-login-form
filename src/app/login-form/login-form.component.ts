import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';

import {CustomValidators} from '../shared/custom-validators';
import {UserAuthData} from '../shared/user-auth-data.interface';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})

export class LoginFormComponent implements OnInit {
  protected loginForm: FormGroup;

  constructor(private fb: FormBuilder,
              private loginService: LoginService) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        CustomValidators.symbolsValidator(1),
        CustomValidators.charactersValidator(2)
      ]]
    });
  }

  onSubmit(formData: UserAuthData) {
    this.loginService.login(formData);
  }

  get isAuthorized() {
    return this.loginService.isAuthorized;
  }

}
