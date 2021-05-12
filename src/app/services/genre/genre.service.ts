import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const herokuUrl = 'https://bookkeeperdb.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class GenreService {

  constructor(private http: HttpClient) { }
  getGenres(): any {
    return this.http
      .get(`${herokuUrl}/api/genres`);
  }

  createGenre(newGenre): any {
    console.log(newGenre);
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .post(`${herokuUrl}/api/genres/add`, newGenre, requestOptions);
  }
}
