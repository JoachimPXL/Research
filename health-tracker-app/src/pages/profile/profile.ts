import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Employee } from '../../app/models/employee.model';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {
  selectedEmployee: Employee;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedEmployee = this.navParams.get('employee');
    console.log(this.selectedEmployee);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }



}
