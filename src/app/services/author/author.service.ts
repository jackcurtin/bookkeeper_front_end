import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const herokuUrl = 'https://bookkeeperdb.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  constructor(private http: HttpClient) { }
  getAuthors(): any {
    return this.http
      .get(`${herokuUrl}/api/authors`);
  }

  createAuthor(newAuthor): any {
    console.log(newAuthor);
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .post(`${herokuUrl}/api/authors/add/`, newAuthor, requestOptions);
  }
}
