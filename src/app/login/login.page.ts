import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { UserService } from '../services/user.service';
 
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  //variables(login, password) for sign in operation.
  login: string;
  password: string;
  // hideInputs variable for hiding inputs while app checking for sign in data.
  hideInputs: boolean = false;
 
  constructor(
    private router: Router,
    public alertController: AlertController,
    private userService: UserService,
   ) { }

   //method emptyDataAlert() creates alert if login and password empty or if app failed to sign in(incorrect data)
  async emptyDataAlert() {
    const alert = await this.alertController.create({
      header: 'Error',
      message: 'Check input data',
      buttons: ['OK'],
      translucent: false
    });

    await alert.present();
  }

  //method checkUser() checks inputs(login, password) data,
  // if data correct it is sends us to home page(user signed in)
  checkUser() {
    this.hideInputs = true;
     this.userService.getUser(this.login, this.password).subscribe(data => {
      if (data !== null) {
        this.router.navigateByUrl('/home');
        this.userService.user = data;
        this.login = undefined;
        this.password = undefined;
        this.hideInputs = false;
      }
      else {
        this.hideInputs = false;
        this.emptyDataAlert();
        this.login = undefined;
        this.password = undefined;
      }
    });
  }

  //signIn(), button(SIGN IN) click event, checks if login and password are not empty
  signIn() {
    if (this.login !== undefined && this.password !== undefined &&
      this.login !== '' && this.password !== '') {
       this.checkUser();
    }
    else {
      this.emptyDataAlert();
    }
  }


  ngOnInit() {
  }

}
