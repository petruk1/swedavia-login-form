import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LoginService} from '../login.service';
import {Router} from '@angular/router';
import {animate, state, style, transition, trigger} from '@angular/animations';

const ANIMATION = [trigger('formShadow', [
  state('in', style({
    boxShadow: '0 3px 10px gray'
  })),
  state('out', style({
    boxShadow: 'none'
  })),
  transition('in => out', animate('500ms ease-in')),
  transition('out => in', animate('1000ms ease-out'))
])];

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  animations: [ANIMATION]
})

export class LoginFormComponent implements OnInit {
  loginForm: FormGroup;
  mouseLocation = 'out';

  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private router: Router) {
  }

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['username', [Validators.required, Validators.minLength(4)]],
      password: ['password', [Validators.required, Validators.minLength(6)]]
    });
  }

  onSubmit(formData: any) {
    this.loginService.login(formData);
    this.router.navigate(['/welcome']);
  }

  onMouseEnterForm() {
    this.mouseLocation = 'in';
  }

  onMouseLeaveForm() {
    this.mouseLocation = 'out';
  }


}
