import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Building } from '../models/building.model';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  buildings: Building[];

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://localhost:44354/api/building';
 
  getBuildings(){
    return this.http.get<any>(this.baseUrl);
  }
}
