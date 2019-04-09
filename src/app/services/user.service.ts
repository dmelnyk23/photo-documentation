import { Injectable } from '@angular/core';
 import { HttpClient } from '@angular/common/http';
import {User} from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;


  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://localhost:44305/api/user';
 
  postUser(checkUser) {
    return this.http.post<string>(this.baseUrl, checkUser);
  }

}