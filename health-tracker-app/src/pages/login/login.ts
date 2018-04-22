import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { EmployeeService } from '../../app/services/employee.service';
import { AuthToken } from '../../app/models/authToken.model';
import { AuthUser } from '../../app/models/authEmployee.model';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
 @Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  message;
  authToken: AuthToken
  user: AuthUser;

  constructor(public navCtrl: NavController, public navParams: NavParams, private employeeService: EmployeeService) {
  }

  login(formValue: any) {
    let email = formValue['email'].toLowerCase();
    let password = formValue['password'];

    this.employeeService.loginEmployee(email, password).subscribe(res => {
      this.user = res;
      localStorage.setItem("token", this.user.id);
      this.navCtrl.push(HomePage);
    },
      (error) => {
        if (error.status == 401) {
          console.log("Email already used.")
        } else {
          this.message = "Something went wrong try again. \n Or mayby you should to check your email for a verification email.";
        }
      });

  }

}
