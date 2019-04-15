import { Injectable } from '@angular/core';
import { Floor } from '../models/floor.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  floors: Floor[];

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://localhost:44354/api/floor';
 
  getFloor(id){
    return this.http.get<any>(this.baseUrl + '/' + id);
  }
}
