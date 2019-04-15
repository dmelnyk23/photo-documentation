import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  rooms: Room[];
  choosenRoom: Room;
  constructor(private http: HttpClient) { }
  baseUrl: string = 'https://localhost:44354/api/room';
 
  getRooms(id){
    return this.http.get<any>(this.baseUrl + '/' + id);
  }

  getChoosenRoom(id){
    this.rooms.forEach(item => {
      if(item.id === id){
        this.choosenRoom = item;
      } 
    });
  }
}
