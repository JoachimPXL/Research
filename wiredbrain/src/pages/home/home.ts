import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  menuData = [
    {title: 'Our Menu', pic: 'assets/imgs/soup1.jpg', pushPage:'MenuPage'},
    {title: 'Account', pic: 'assets/imgs/soup1.jpg', pushPage:'AccountPage'},
    {title: 'Abouts Us', pic: 'assets/imgs/soup1.jpg', pushPage:'AboutPage'},
    {title: 'Locations', pic: 'assets/imgs/soup1.jpg', pushPage:'LocationsPage'},
  ]

  logPage:any

  constructor(public navCtrl: NavController) {
    this.logPage = 'LoginPage';
  }

}
