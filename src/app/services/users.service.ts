import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http'
import { User } from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _http:HttpClient) { }

  api_url: string = 'https://jsonplaceholder.typicode.com';

  getData(){
    return this._http.get(`${this.api_url}/users`);
  }

}
