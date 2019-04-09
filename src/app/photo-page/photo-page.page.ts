import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { RoomService } from '../services/room.service';
import { Room } from '../models/room.model';

@Component({
  selector: 'app-photo-page',
  templateUrl: './photo-page.page.html',
  styleUrls: ['./photo-page.page.scss'],
})
export class PhotoPagePage implements OnInit {

  room: Room;
  showItem: boolean = true;
  //src: string = 'https://static.boredpanda.com/blog/wp-content/uploads/2017/04/taken-byhana__kitty-6-png__700.jpg';
  src: string = 'https://www.searchpng.com/wp-content/uploads/2019/02/Instagram-Camera-Icon-PNG-715x715.png';
  hideButton: boolean = false;
  showButton: boolean = true;
  constructor(
    private router: Router,
    private location: Location,
    private route: ActivatedRoute,
    private roomService: RoomService,

  ) { }

  backButton(): void {
    this.location.back();
  }

  takePhoto():void{
    this.src = 'https://static.boredpanda.com/blog/wp-content/uploads/2017/04/taken-byhana__kitty-6-png__700.jpg'
    this.showButton = false;
    this.hideButton = true;
  }
  takeOhterPhote():void{
    this.src = 'https://www.searchpng.com/wp-content/uploads/2019/02/Instagram-Camera-Icon-PNG-715x715.png';
    this.showButton = true;
    this.hideButton = false;
  }
  

  save():void{
    this.router.navigateByUrl('/save-photo/' + this.room.address);
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.room = this.roomService.getRoomByID(id);
    // console.log(this.room.address)
  }

}
