import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-save-photo',
  templateUrl: './save-photo.page.html',
  styleUrls: ['./save-photo.page.scss'],
})

export class SavePhotoPage implements OnInit {
  
  //variables fro storing photo data
  address: string = " ";
  description: string = " ";
  mangeltypChoice: string = "none";
  gewerkChoice: string = "none";
  mangelprozessStarten: boolean = false;

  //variables for showing/hiding content while loading
  savePhotoContent: boolean = true;
  showSpinner: boolean = false;
  showFooter: boolean = true;
  showSavingButtons: boolean = true;
  showPostSavingContent: boolean = false;
 
  
  constructor(
    private router: Router,
    private photoService: PhotoService,
    private roomService: RoomService,
   ) { }
 
  backButton(): void {
    this.router.navigateByUrl('/photo-page');
  }

  savePhoto(){
    
    this.savePhotoContent = false;
    this.showFooter = false;
    this.showSavingButtons = false;
    this.showSpinner = true;
    //assign data to service variable that will saved to database 
    this.photoService.photoToSave.address = this.roomService.choosenRoom.address;
    this.photoService.photoToSave.photo = this.photoService.uploadedPhoto;
    this.photoService.photoToSave.gewerk = this.gewerkChoice;
    this.photoService.photoToSave.mangeltyp = this.mangeltypChoice;
    this.photoService.photoToSave.description = this.description;
    this.mangelprozessStarten ? this.photoService.photoToSave.mangelprozessStarten = 'Yes' :
     this.photoService.photoToSave.mangelprozessStarten = 'No';
     //saving photo to database 
     this.photoService.savePhoto().subscribe(() => {
        this.showSpinner = false;
        this.showPostSavingContent = true;
        this.showFooter = true;
        this.photoService.uploadedPhoto = '';
      });
    }
    
    anotherPhotoClick(){// opportunity to take one more photo after save operations
    this.router.navigateByUrl('/photo-page');
  }

  ngOnInit() {

  }

  exitButton(): void{
    this.router.navigateByUrl('/home');
  }

}