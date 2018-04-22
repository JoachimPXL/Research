import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Employee } from '../models/employee.model';
import 'rxjs/add/operator/map';
import { Device } from '../models/device.model';
import { Organisation } from '../models/organisation.model';
import { AuthToken } from '../models/authToken.model';
import { AuthUser } from '../models/authEmployee.model';
"use strict";

const BASEAPIURL = "10.1.15.27:3000/api/";
const largeAPI = "https://raw.githubusercontent.com/prust/wikipedia-movie-data/master/movies.json";

@Injectable()
export class EmployeeService implements OnInit{

  constructor(private http: Http) {
    this.http = http;
  }

  ngOnInit() {
  }

  getDepartments() {
      return this.http.get(largeAPI)
      .map(res => {
          return res.json();
      });
  }

  loginEmployee(email, password): Observable<AuthUser> {
    var headers = this.createHeaders();
    headers.delete("Authorization");

    let options = new RequestOptions({ headers: headers });
    return this.http.post(BASEAPIURL + "employees/login?include=user", { "email": email, "password": password }, options)
      .map(res => {
        localStorage.setItem('authUser', JSON.stringify(res.json()));
        return res.json();
      });
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('authUser');
    return this.http.post(BASEAPIURL + "employees/logout?access_token=" + localStorage.getItem("token"), {})
    .subscribe(
      (succes) => {
          console.log('Succesfully logged out.')
      },
      (error) => {
        console.log(error);
      }
    );
    
  }

  getEmployees(): Observable<Employee[]> {
    var headers = this.createHeaders();
    let options = new RequestOptions({ headers: headers });

    return this.http.get(BASEAPIURL + "employees", options)
      .map(res => {
        return res.json();
      });
  }

  getEmployeePoints(organisationName): Observable<number> {
    var points = 0;
    return this.http.get(BASEAPIURL + "/employees/points?organisationName=" + organisationName).map(total => {
      points = total.json();
      return points;
    });
  }

  getEmployee(id: any): Observable<Employee> {
    var headers = this.createHeaders();
    
    let options = new RequestOptions({ headers: headers });

    return this.http.get(BASEAPIURL + "employees/" + id, options).map(result => {
      return result.json();
    });
  }

  updateEmployee(employee: Employee) {
    var headers = this.createHeaders();
    let options = new RequestOptions({ headers: headers });

    return this.http.put((BASEAPIURL + "employees/" + employee.id), employee, options)
      .subscribe((e) => {
        console.log(e);
      });
  }

  patchEmployee(employee: Employee) {
    var headers = this.createHeaders();
    let options = new RequestOptions({ headers: headers });

    return this.http.patch((BASEAPIURL + "employees/" + employee.id), employee, options)
      .subscribe((e) => {
        console.log(e);
      });
  }

  postEmployee(employee: Employee) {
    employee.id = undefined;
    var headers = this.createHeaders();
    headers.delete("Authorization");
    let options = new RequestOptions({ headers: headers });
    
    return this.http.post(BASEAPIURL + "employees", JSON.stringify(employee), options);
  }

  createHeaders() {
    var headers = new Headers();
    headers = new Headers({'Content-Type': 'application/json' });
    headers.append('Authorization', localStorage.getItem("token"));
    return headers;
  }
}
