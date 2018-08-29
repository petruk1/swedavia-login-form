import {Component, OnInit} from '@angular/core';
import {LoginService} from '../login.service';

@Component({
  selector: 'app-popup-greetings',
  templateUrl: './popup-greetings.component.html',
  styleUrls: ['./popup-greetings.component.scss']
})
export class PopupGreetingsComponent implements OnInit {
  protected username: string;

  constructor(private loginService: LoginService) {
  }

  ngOnInit() {
    this.username = this.loginService.username;
  }

}
