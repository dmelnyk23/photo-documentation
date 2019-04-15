import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../models/user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user: User;


  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://localhost:44354/api/user';
  
  //checkUser
  getUser(login, password) {
    return this.http.get<any>(this.baseUrl + "/" + login + '/' + password);
  }

}