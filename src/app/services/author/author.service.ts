import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
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
}
