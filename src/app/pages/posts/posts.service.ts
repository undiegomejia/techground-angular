import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../users/users.interface';
import { Post } from './post.interface';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  constructor(private _http: HttpClient) {}

  public getPosts(): Observable<any> {
    return this._http.get<Post[]>(
      'https://jsonplaceholder.typicode.com/posts',
      { observe: 'body', responseType: 'json' }
    );
  }

  public commentsByParams(): Observable<any> {
    const params = new HttpParams().set('postId', '2');
    return this._http.get<Comment[]>(
      'https://jsonplaceholder.typicode.com/comments',
      { params: params }
    );
  }

  public newPost(newPost: Post): Observable<any> {
    return this._http.post<Post[]>(
      'https://jsonplaceholder.typicode.com/posts',
      newPost
    );
  }

  public putPost(newPost: Post): Observable<any> {
    return this._http.put<Post[]>(
      'https://jsonplaceholder.typicode.com/posts/1',
      newPost
    );
  }

  public patchPost(newPost: Post): Observable<any> {
    return this._http.patch<Post[]>(
      'https://jsonplaceholder.typicode.com/posts/1',
      newPost
    );
  }

  public deletePost(): Observable<any> {
    return this._http.delete<Post[]>(
      'https://jsonplaceholder.typicode.com/posts/2'
    );
  }
}
