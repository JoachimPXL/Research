import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { EmployeeService } from '../../app/services/employee.service';
import { AuthUser } from '../../app/models/authEmployee.model';
import { ProfilePage } from '../profile/profile';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage{
  employees;
  sortedEmployees; // Sorted list of employees.
  organisations; // All organisations to fill the dropdownlist.
  employee: AuthUser; // Logged in user
  departments;


  constructor(public navCtrl: NavController, private employeeService: EmployeeService) {
    this.employeeService.getEmployees().subscribe(data => {
      this.employees = data;
      this.sortedEmployees = this.sortListRank(this.employees);
    });
    this.employeeService.getDepartments().subscribe(data => {
      console.log(data);
      this.departments = data;
    })
  }

  sortListRank(array) {
    return array.sort((a, b) => a.points < b.points);
  }

  itemSelected(employee: any) {
    this.navCtrl.push(ProfilePage, {'employee': employee});
  }

}
