import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import { Router } from '@angular/router';

const herokuUrl = 'https://bookkeeperdb.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  currentUser: string;
  searchSubject = new Subject();

  constructor(private http: HttpClient, private router: Router) { }
  registerUser(newUser): void {
    console.log(newUser);
    this.http
      .post(`${herokuUrl}/auth/users/register`, newUser)
      .subscribe(response => console.log(response), err => console.log(err));
  }

  loginUser(user): void {
    console.log(user);
    this.http
      .post(`${herokuUrl}/auth/users/login`, user)
      .subscribe(response => {
        const token = response['jwt'];
        localStorage.setItem('currentUser', `${user.userName}`);
        localStorage.setItem('token', `${token}`);
        console.log(response, token);
        this.currentUser = user.userName;
        this.searchSubject.next(this.currentUser);
        this.router.navigate(['/books']);
      }, err => console.log(err));
  }

  logoutUser(): void {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
    this.currentUser = 'null';
    this.searchSubject.next(this.currentUser);
    this.router.navigate(['/login']);
  }
}
