import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from './users.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private _http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this._http.get<User[]>('https://jsonplaceholder.typicode.com/users', {observe: 'body', responseType: 'json'})
  }

}
