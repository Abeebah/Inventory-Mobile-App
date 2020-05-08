import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../inventory.service';
import {ModelService} from '../model.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage {
  userId: number;
  firstName: any;
  lastName: any;
  email: any;
  userName: any;
  company: any;

  constructor(public model: ModelService, public invent: InventoryService) {
    this.userId = this.model.getUserId();
    console.log(this.userId);
    this.firstName = this.model.getFirstName();
    console.log(this.firstName);
    this.lastName = this.model.getLastName();
    console.log(this.lastName);
    this.userName = this.model.getUserName();
    console.log(this.userName);
    this.company = this.model.getCompany();
    console.log(this.company);
    this.email = this.model.getEmail();
    console.log(this.email);
  }

}
