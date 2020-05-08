import { Component, OnInit } from '@angular/core';
import {InventoryService} from '../inventory.service';
import {ModelService} from '../model.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-addpurchase',
  templateUrl: './addpurchase.page.html',
  styleUrls: ['./addpurchase.page.scss'],
})
export class AddpurchasePage {
  userId: number;
  add: any = {product: '', quantity: '', user_id: this.userId};
 // purchaseData: any;
  productData: any;
  purchasePrData: any[] = [];
  responseBody: any;

  constructor(public model: ModelService, public invent: InventoryService, public alertCtrl: AlertController) {
    this.userId = this.model.getUserId();
    console.log(this.userId);
    this.getProduct();
  }

  addPurchase() {
    this.invent.addPurchase(this.add.product, this.add.quantity, this.userId).then((result) => {
      const res: any = result;
      if (res.shortCode === 0 ) {
        this.showAlert(res.shortMessage);
        this.add = {product: '', quantity: ''};
      } else if (res.shortCode === -1000) {
        this.showAlert(res.shortMessage);
      }
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  }

  getProduct() {
    this.invent.getProduct().then((res) => {
      this.responseBody = res;
      if (this.responseBody.responseCode === 0) {
        this.productData = this.responseBody.productData;
        console.log(this.productData);
        for (let i = 0; i < this.productData.length; i++) {
          this.purchasePrData.push(this.productData[i]);
        }
      } else {
        console.log('failed');
      }
    }).catch((err) => {
    });
  }

  getProductId(id) {
    console.log(id + 'iiuuuy');
      }

      async showAlert(msg: string) {
        const alert = await this.alertCtrl.create({
          header: 'Success',
         // subHeader: 'Subtitle',
          message: msg,
          buttons: ['OK']
        });
        await alert.present();
      }
}
