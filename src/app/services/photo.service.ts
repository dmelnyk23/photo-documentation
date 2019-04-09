import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Photo} from "../models/photo.model";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://localhost:44305/api/photos';

  getPhotos() {
    return this.http.get<Photo[]>(this.baseUrl);
  }

  getPhotoById(id: number) {
    return this.http.get<Photo>(this.baseUrl + '/' + id);
  }

  createPhoto(photo: Photo) {
    return this.http.post(this.baseUrl, photo);
  }

  updatePhoto(photo: Photo) {
    return this.http.put(this.baseUrl + '/' + photo.id, photo);
  }

  deletePhoto(id: number) {
    return this.http.delete(this.baseUrl + '/' + id);
  }
}