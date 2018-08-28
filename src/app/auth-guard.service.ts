import {Injectable} from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import {LoginService} from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginService, private router: Router) {
  }

  canActivate() {
    if (this.loginService.isAuthorized) {
      return this.loginService.isAuthorized;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }
}
