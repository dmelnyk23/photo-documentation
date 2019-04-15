import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../services/photo.service';
// import { ScreenOrientation } from '@ionic-native/screen-orientation/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-photos-list',
  templateUrl: './photos-list.page.html',
  styleUrls: ['./photos-list.page.scss'],
})
export class PhotosListPage implements OnInit {

  allPhotoConent: boolean = true; //shows all photos content
  detailsConent: boolean = false; //shows choosen photo content
  roomDetails: any; // holds choosen photo information
 
  constructor(
    private router: Router,
    private photoService: PhotoService,
    // private screenOrientation: ScreenOrientation
    ) { }

  showInfo(data: any){
    //screenOrientation used for locking screen orientation in landscape mode(windows browser do not support it)
    //this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.LANDSCAPE);
    //console.log(this.screenOrientation.type);
    this.roomDetails = data;
    this.allPhotoConent = false;
    this.detailsConent = true;
  }

  backButton(){
    //check which content currently showing and change it.
    this.detailsConent ? (this.allPhotoConent = true, this.detailsConent= false) : 
    this.router.navigateByUrl('/home');
  }

  ngOnInit() {
    this.photoService.GetAllPhotos().subscribe(data => {
      this.photoService.allPhotos = data;
     })
  }

}
