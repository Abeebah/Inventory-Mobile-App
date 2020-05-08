import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../inventory.service';

@Component({
  selector: 'app-purchases',
  templateUrl: './purchases.page.html',
  styleUrls: ['./purchases.page.scss'],
})
export class PurchasesPage {
  users: any[];
  purchaseData: any[] = [];
  purData: any[] = [];
  responseBody: any;

  constructor(public invent: InventoryService) {
    this.getPurchase();
   }
  getPurchase(){
    this.invent.getPurchase().then((res) => {
      this.responseBody = res;
      if (this.responseBody.responseCode === 0){
        this.purchaseData = this.responseBody.purchaseData;
        for (let i = 0; i < this.purchaseData.length; i++){
          this.purData.push(this.purchaseData[i]);
        }
      } else {
        console.log('failed');
      }
    }).catch((err) => {});
  }

}
