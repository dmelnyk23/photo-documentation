import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

  //variables(buildings, floors, apartments, rooms) for storing data from database
  buildings: Building[];
  floors: Floor[];
  apartments: Apartment[];
  rooms: Room[];
  dataToShow: any;// holds data that displays on screen
  pageNavigation: string = 'Location'; // shows choosen location(example: Building 1)
  returnPath: string;// used for holding of location type(building, floor, room...) for back button 
  hideInputs: boolean = false;// hides inputs while loading data

  constructor(
    private router: Router,
    private buildingService: BuildingService,
    private floorService: FloorService,
    private apartmentService: ApartmentService,
    private roomService: RoomService,
    public alertController: AlertController,
  ) { }

  // getBuildings(): void {
  //   this.buildings = this.buildingService.buildings;// gets all building
  // }

  ngOnInit() {
    // this.getBuildings();
    this.buildings = this.buildingService.buildings;
    this.dataToShow = this.buildings;
  }

  //gets floors by id of the choosen building
  getFloors(id, info) {
    this.hideInputs = true;
    this.floorService.getFloor(id).subscribe(data => {
      if (data != null) {
        this.floorService.floors = data;
        this.floors = this.floorService.floors;
        this.dataToShow = this.floors; // assigns floors to variable that shows information in html file 
        this.pageNavigation = info; // assigns location for page title
        this.returnPath = this.floors[0].type; // assigns information for back button 
        this.hideInputs = false;
      }
      else if (data === null) {//if there no rooms to display alert appears
        this.hideInputs = false;
        this.emptyLocationAlert()
      }
    })
  }

  //gets apartments by id of the choosen floor
  getApartments(id, info) {
    this.hideInputs = true;
    this.apartmentService.getApartment(id).subscribe(data => {
      if (data != null) {
        this.apartmentService.apartments = data;
        this.apartments = this.apartmentService.apartments;
        this.dataToShow = this.apartments;// assigns apartments to variable that shows information in html file 
        this.pageNavigation = info;// assigns location for page title
        this.returnPath = this.apartments[0].type; // assigns information for back button 
        this.hideInputs = false;
      }
      else if (data === null) {//if there no rooms to display alert appears
        this.hideInputs = false;
        this.emptyLocationAlert()
      }
    })
  }

  //gets rooms by id of the choosen apartment
  getRooms(id, info) {
    this.hideInputs = true;
    this.roomService.getRooms(id).subscribe(data => {
      if (data != null) {
        this.roomService.rooms = data;
        this.rooms = this.roomService.rooms;
        this.dataToShow = this.rooms;// assigns apartments to variable that shows information in html file
        this.pageNavigation = info;// assigns location for page title
        this.returnPath = this.rooms[0].type; // assigns information for back button 
        this.hideInputs = false;
      }
      else if (data === null) { //if there no rooms to display alert appears
        this.hideInputs = false;
        this.emptyLocationAlert()
      }
    })
  }
  


  locationButtonClick(data: any) {
    switch (data.type) { // switch checks current location of the page(if "Building" app loads floors )
      case 'Building':
        this.getFloors(data.id, data.info);
        break;
      case 'Floor':
        this.getApartments(data.id, data.info);
        break;
      case 'Apartment':
       this.getRooms(data.id, data.info)
        break;
      case 'Room':
        this.roomService.getChoosenRoom(data.id);
        this.router.navigateByUrl('/photo-page');
        break;
    }
  }

  backButton(): void { 
    switch (this.returnPath) {//checks returnPath variable(if "Apartment" app shows floors)
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
      this.router.navigateByUrl('/home');
      break;
    }
  }

  //alert if choosen location is empty
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