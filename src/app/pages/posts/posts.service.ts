import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../users/users.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private _http: HttpClient) {}

  public getPosts(): Observable<any> {
    return this._http.get<User[]>('https://jsonplaceholder.typicode.com/posts', {observe: 'body', responseType: 'json'})
  }

  public commentsPerPost(): Observable<any> {
    const params = new HttpParams().set('postId', '1')
    return this._http.get<User[]>('https://jsonplaceholder.typicode.com/comments', {params:params})
  }
}
