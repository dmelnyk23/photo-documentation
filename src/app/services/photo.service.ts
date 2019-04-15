import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Photo} from "../models/photo.model";

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  uploadedPhoto: any;
  photoToSave: Photo = new Photo();
  allPhotos: Photo[];

  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://localhost:44354/api/photo';
  
  savePhoto(){
     return this.http.put<any>(this.baseUrl, this.photoToSave);
  }

  GetAllPhotos(){
    return this.http.get<any>(this.baseUrl);
 }
 
}