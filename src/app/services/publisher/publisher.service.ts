import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
const herokuUrl = 'https://bookkeeperdb.herokuapp.com';

@Injectable({
  providedIn: 'root'
})
export class PublisherService {

  constructor(private http: HttpClient) { }
  getPublishers(): any {
    return this.http
      .get(`${herokuUrl}/api/publishers`);
  }

  createPublisher(newPublisher): any {
    console.log(newPublisher);
    const token = localStorage.getItem('token');
    const requestOptions = {
      headers: new HttpHeaders({
        Authorization: `Bearer ${token}`
      }),
    };
    return this.http
      .post(`${herokuUrl}/api/publishers/add`, newPublisher, requestOptions);
  }
}
