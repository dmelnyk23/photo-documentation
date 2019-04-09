import { Injectable } from '@angular/core';
import { Building } from '../models/building.model';
import { Buildings } from '../mock-buildings';

@Injectable({
  providedIn: 'root'
})
export class BuildingService {

  constructor() { }

  getBuildings(): Building[] {
    return Buildings;
  }
}
