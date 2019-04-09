import { Injectable } from '@angular/core';
import { Room } from '../models/room.model';
import { Rooms } from '../mock-rooms';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  rooms: any[] = [];

  constructor() { }

  getRooms(id: number): Room[] {
    this.rooms = [];
    Rooms.forEach(item => {
      if (item.apartmentID === id) {
        this.rooms.push(item);
      }
    });
    return this.rooms;
  }

  getRoomByID(id: number): Room {
    let room;
    this.rooms.forEach(item => {
      if (item.id === id) {
        room = item;
      }
    });
    return room;
  }
}
