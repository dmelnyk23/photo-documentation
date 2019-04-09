import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Photo} from "../models/photo.model";
import {ApiService} from "../core/api.service";

@Component({
  selector: 'app-list-photo',
  templateUrl: './list-photo.component.html',
  styleUrls: ['./list-photo.component.scss'],
})
export class ListPhotoComponent implements OnInit {

  // photos: Photo[];

  // constructor(private router: Router, private apiService: ApiService) { }

  ngOnInit() {
    // this.apiService.getPhotos()
    //   .subscribe( data => {
    //     this.photos = data;
    //   });
  }

  // deletePhoto(photo: Photo): void {
  //   this.apiService.deletePhoto(photo.id)
  //     .subscribe( data => {
  //       this.photos = this.photos.filter(u => u !== photo);
  //     })
  // };

  // editPhoto(photo: Photo): void {
  //   window.localStorage.removeItem("editPhotoId");
  //   window.localStorage.setItem("editPhotoId", photo.id.toString());
  //   this.router.navigate(['edit-photo']);
  // };

  // addPhoto(): void {
  //   this.router.navigate(['add-photo']);
  // };

}
