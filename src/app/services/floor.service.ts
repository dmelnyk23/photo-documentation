import { Injectable } from '@angular/core';
import { Floor } from '../models/floor.model';
import { Floors } from '../mock-floors';

@Injectable({
  providedIn: 'root'
})
export class FloorService {

  floors: any[] = [];

  constructor() { }

  getFloors(id: number): Floor[] {
    this.floors = [];
    Floors.forEach(item => {
      if (item.buildingID === id) {
        this.floors.push(item);
      }
    });
    
    return this.floors;
  }
}
