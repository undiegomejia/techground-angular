import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private _http: HttpClient) {}

  api_url: string = 'https://jsonplaceholder.typicode.com';

  getData(slug: string) {
    return this._http.get(`${this.api_url}/${slug}`);
  }
}
