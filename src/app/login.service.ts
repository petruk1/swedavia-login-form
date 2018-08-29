import {Injectable} from '@angular/core';
import {UserAuthData} from './shared/user-auth-data.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private _username: string;
  private _password: string;
  private _isAuthorized = false;

  constructor() {
  }

  login(userData: UserAuthData): void {
    this._username = userData.username;
    this._password = userData.password;
    this._isAuthorized = true;
  }

  get isAuthorized() {
    return this._isAuthorized;
  }

  get username() {
    return this._username;
  }
}
