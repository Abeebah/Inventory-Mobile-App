import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../inventory.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.page.html',
  styleUrls: ['./stock.page.scss'],
})
export class StockPage {
  users: any;
  productData: any[] = [];
  stData: any[] = [];
  responseBody: any;
  constructor(public invent: InventoryService, public navCtrl: NavController) {
    this.getStock();
   }

  getStock() {
    this.invent.getProduct().then((res) => {
      this.responseBody = res;
      if (this.responseBody.responseCode === 0){
        this.productData = this.responseBody.productData;
        for (let i = 0; i < this.productData.length; i++){
          this.stData.push(this.productData[i]);
        }
      } else {
        console.log('failed');
      }
    }).catch((err) => {
    })
  }

  getCustomer() {
    this.invent.getProduct().then((res) => {
      this.responseBody = res;
      if (this.responseBody.responseCode === 0){
        this.productData = this.responseBody.productData;
        for (let i = 0; i < this.productData.length; i++){
          this.stData.push(this.productData[i]);
        }
      } else {
        console.log('failed');
      }
    }).catch((err) => {
    })
  }
}


