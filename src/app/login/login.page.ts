import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  login: string;
  password: string;
  user: User;

  constructor(
    private router: Router,
    public alertController: AlertController,
    private userService: UserService,

  ) { }


  async emptyDataAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Please fill all fields',
      buttons: ['OK'],
      translucent: false
    });

    await alert.present();
  }

  checkUser() {
    const checkUser = {
      login: this.login,
      password: this.password
    }

    // this.userService.getUser(checkUser).subscribe(data =>{
    //   this.user = data});
    this.userService.postUser(checkUser).subscribe(data => {
      // this.user = data;
      console.log(data);
    })

  }


  signIn(): void {

    if (this.login !== undefined && this.password !== undefined &&
      this.login !== '' && this.password !== '') {
      //this.router.navigateByUrl('/home');
      this.checkUser();
      this.login = undefined;
      this.password = undefined;
    }
    else {
      this.emptyDataAlert();
    }
  }


  ngOnInit() {
  }

}
