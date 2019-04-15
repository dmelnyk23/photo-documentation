import { Injectable } from '@angular/core';
import { Apartment } from '../models/apartment.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  apartments: Apartment[];

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://localhost:44354/api/apartment';
 
  getApartment(id){
    return this.http.get<any>(this.baseUrl + '/' + id);
  }
}
