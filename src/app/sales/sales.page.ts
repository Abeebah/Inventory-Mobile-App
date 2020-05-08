import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.page.html',
  styleUrls: ['./sales.page.scss'],
})
export class SalesPage {
  users: any;
  salesData: any[] = [];
  sData: any[] = [];
  responseBody: any;
  constructor(public invent: InventoryService, public navCtrl: NavController) {
    this.getSale();
  }

  getSale() {
    this.invent.getSale().then((res) => {
      this.responseBody = res;
      if (this.responseBody.responseCode === 0) {
        this.salesData = this.responseBody.salesData;
        for (let i = 0; i < this.salesData.length; i++) {
          this.sData.push(this.salesData[i]);
        }
      }else {
          console.log('Failed');
      }
    }).catch((err) => {
    })
  }


}