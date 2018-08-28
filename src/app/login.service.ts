import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  username: string;
  password: string;
  isAuthorized = false;

  constructor() {
  }

  login(userdata: any): void {
    this.username = userdata.username;
    this.password = userdata.password;
    this.isAuthorized = true;
  }

  getUsername() {
    return this.username;
  }
}
