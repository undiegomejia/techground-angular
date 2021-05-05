import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private _http: HttpClient) {}

  api_url: string = 'https://jsonplaceholder.typicode.com';

  getData(slug: string) {
    return this._http.get<User>(`${this.api_url}/${slug}`,{observe: 'body', responseType: 'json'});
  }
}
