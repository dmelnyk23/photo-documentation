import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PhotoService } from '../services/photo.service';
import { Photo } from '../models/photo.model';

@Component({
  selector: 'app-save-photo',
  templateUrl: './save-photo.page.html',
  styleUrls: ['./save-photo.page.scss'],
})

export class SavePhotoPage implements OnInit {

  address: string = '';
  description: string = '';
  mangeltypChoice: string = '';
  gewerkChoice: string = '';
  MangelprozessStarten: boolean = false;
  photos: Photo[];

  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private photoService: PhotoService,
  ) { }

  getPhotos(): void {
    this.photoService.getPhotos().subscribe(data =>{
      this.photos = data;
      console.log(data);
    } );
  }


  backButton(): void {
    this.location.back();
  }

  ngOnInit() {
    //this.address = this.route.snapshot.paramMap.get('address');
    this.getPhotos();

  }

  exitButton(): void{
    this.router.navigateByUrl('/home');
  }

}