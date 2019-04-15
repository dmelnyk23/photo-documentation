import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { BuildingService } from '../services/building.service';
import { AlertController } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  //hides inputs while loading data
  hideInputs: boolean = false;

  constructor(private router: Router,
    private userService: UserService, //implemented to get user photo for avatar component in html file.
    private buildingService: BuildingService,
    public alertController: AlertController,
    private photoService: PhotoService
  ) {
  }

  //emptyDataAlert() creates alert if there is no data to display(buildings or photos).
  async emptyDataAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'There is no data to show!',
      buttons: ['OK'],
      translucent: false
    });

    await alert.present();
  }

  //getBuildings() gets all buildings with buildingService that gets data from database.
  //if buildings exist, redirects to location page.
  getBuildings() {
    this.hideInputs = true;
    this.buildingService.getBuildings().subscribe(data => {
      if (data != null) {
        this.buildingService.buildings = data;
        this.router.navigateByUrl('/location');
        this.hideInputs = false;
      }
      else {
        this.emptyDataAlert()
        this.hideInputs = false;
      }
    })
  }

  //viewAllPhotos() gets all photos with photoService that gets data from database.
  //if pgotos exist, redirects to photos-list page.
  viewAllPhotos() {
    this.hideInputs = true;
    this.photoService.GetAllPhotos().subscribe(data => {
      this.photoService.allPhotos = data;
      if (this.photoService.allPhotos.length > 0) {
        this.hideInputs = false;
        this.router.navigateByUrl('/photos-list');
      }
      else {
        this.emptyDataAlert()
        this.hideInputs = false;
      }
    })
  }

  //photoButton() click event for photoButton that allows to take photo after choosing location for the photo 
  photoButton(): void {
    this.hideInputs = true;
    this.getBuildings();
  }

  //exitButton()click event for Exit(sign out)
  exitButton(): void {
    this.router.navigateByUrl('/login');
  }

  ngOnInit() {
  }

}