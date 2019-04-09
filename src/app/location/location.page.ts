import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AlertController } from '@ionic/angular';
import { BuildingService } from '../services/building.service';
import { Building } from '../models/building.model';
import { FloorService } from '../services/floor.service';
import { Floor } from '../models/floor.model';
import { ApartmentService } from '../services/apartment.service';
import { Apartment } from '../models/apartment.model';
import { RoomService } from '../services/room.service';
import { Room } from '../models/room.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit {

  buildings: Building[];
  floors: Floor[];
  apartments: Apartment[];
  rooms: Room[];
  dataToShow: any;
  pageNavigation: string = 'Location';
  returnPath: string;

  constructor(
    private router: Router,
    private location: Location,
    private buildingService: BuildingService,
    private floorService: FloorService,
    private apartmentService: ApartmentService,
    private roomService: RoomService,
    public alertController: AlertController,
  ) { }

  getBuildings(): void {
    this.buildings = this.buildingService.getBuildings();
  }

  ngOnInit() {
    this.getBuildings();
    this.dataToShow = this.buildings;
  }

  locationButtonClick(data: any): void {
     switch (data.type) {
      case 'Building':
        this.floors = this.floorService.getFloors(data.id);
        (this.floors.length === 0) ? this.emptyLocationAlert() :
          (this.dataToShow = this.floors,
            this.pageNavigation = data.info,
            this.returnPath = data.type);
        break;
      case 'Floor':
        this.apartments = this.apartmentService.getApartments(data.id);
        (this.apartments.length === 0) ? this.emptyLocationAlert() :
          (this.dataToShow = this.apartments,
            this.pageNavigation = data.info,
            this.returnPath = data.type);
        break;
      case 'Apartment':
        this.rooms = this.roomService.getRooms(data.id);
        (this.rooms.length === 0) ? this.emptyLocationAlert() :
          (this.dataToShow = this.rooms,
            this.pageNavigation = data.info,
            this.returnPath = 'Room');
        break;
        case 'Room':
        this.router.navigateByUrl('/photo-page/' + data.id);
        break;
     }
  }

  backButton(backFrom: any): void {
    switch (backFrom) {
      case 'Floor':
        this.pageNavigation = 'Location';
        this.returnPath = '';
        this.dataToShow = this.buildings;
        break;
      case 'Apartment':
        this.dataToShow = this.floors;
        this.returnPath = this.dataToShow[0].type;
        this.pageNavigation = 'Building ' + this.dataToShow[0].buildingID;
        break;
        case 'Room':
        this.dataToShow = this.apartments;
        this.returnPath = this.dataToShow[0].type;
        this.pageNavigation = 'Floor ' + this.dataToShow[0].floorID;
        break;
      default:
        this.location.back();
        break;
    }
  }

  async emptyLocationAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: `This ${this.dataToShow[0].type} is empty!`,
      buttons: ['OK'],
      translucent: false
    });
    await alert.present();
  }
}