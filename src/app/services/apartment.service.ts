import { Injectable } from '@angular/core';
import { Apartment } from '../models/apartment.model';
import { Apartments } from '../mock-apartments';

@Injectable({
  providedIn: 'root'
})
export class ApartmentService {
  apartments: any[] = [];

  constructor() { }

  getApartments(id: number): Apartment[] {
    this.apartments = [];
    Apartments.forEach(item => {
      if (item.floorID === id) {
        this.apartments.push(item);
      }
    });
    
    return this.apartments;
  }
}
