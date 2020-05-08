import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  userId: number;
  firstName: any;
  lastName: any;
  email: any;
  username: any;
  company: any;

  constructor() { }

  // public profile() {
  //   this.firstName = this.getFirstName();
  //   this.lastName = this.getLastName();
  //   this.email = this.getEmail();
  //   this.getUserName = this.getUserName();
  //   this.company = this.getCompany();
  // }

  public getUserId() {
    return this.userId;
  }

  public setUserId(userId: number) {
    this.userId = userId;
  }

  public getFirstName() {
    return this.firstName;
  }
  public setFirstName(firstName: any) {
    return this.firstName = firstName;
  }

  public getLastName() {
    return this.lastName;
  }
  public setLastName(lastName: any) {
    return this.lastName = lastName;
  }

  public getEmail() {
    return this.email;
  }
  public setEmail(emaill: any) {
    return this.email = emaill;
  }

  public getCompany() {
    return this.company;
  }
  public setCompany(company: any) {
    return this.company = company;
  }

  public getUserName() {
    return this.username;
  }
  public setUserName(username: any) {
    return this.username = username;
  }
}
