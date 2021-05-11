import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userName: string;
  public password: string;

  constructor(private userService: UserService) { }

  loginUser(): void {
    const user = {userName: this.userName, password: this.password};
    console.log(user);
    this.userService.loginUser(user);
  }

  ngOnInit(): void {
  }

}
