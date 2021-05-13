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
    return this._http.get<User[]>(
      'https://jsonplaceholder.typicode.com/users',
      { observe: 'body', responseType: 'json' }
    );
  }

  public getUserById(id: string): Observable<any> {
    return this._http.get<User[]>(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      { observe: 'body', responseType: 'json' }
    );
  }

  public deleteUser(id: number): Observable<any> {
    return this._http.delete<User[]>(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      { observe: 'body', responseType: 'json' }
    );
  }

  public editUser(newUser: User): Observable<any> {
    return this._http.patch<User[]>(
      'https://jsonplaceholder.typicode.com/users/1',
      newUser
    );
  }
}
