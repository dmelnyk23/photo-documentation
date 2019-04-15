import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../services/photo.service';
import { RoomService } from '../services/room.service';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.page.html',
  styleUrls: ['./photo-page.page.scss'],
})
export class PhotoPagePage implements OnInit {

  src = 'https://www.searchpng.com/wp-content/uploads/2019/02/Instagram-Camera-Icon-PNG-715x715.png';//background img
  hideButton: boolean; //hides buttons while loading data
  showButton: boolean; //hides buttons while loading data

  constructor(
    private router: Router,
    private roomService: RoomService, 
    private photoService: PhotoService
  ) { }

  backButton(): void {
    this.router.navigateByUrl('/location');
  }

  imgURL: any;

  preview(files) { //preview of the choosen photo 
    this.photoService.uploadedPhoto = '';
    if (files.length === 0)
      return;

    var reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.photoService.uploadedPhoto = reader.result.toString();
      this.showButton = false;
      this.hideButton = true;
    }
  }



  save(): void {
    this.router.navigateByUrl('/save-photo');
  }

  ngOnInit() {
    this.photoService.uploadedPhoto = '';
    this.hideButton = false;
    this.showButton = true;
  }

}
