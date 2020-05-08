import { Component, OnInit } from '@angular/core';
import { ModelService } from '../model.service';
import { InventoryService } from '../inventory.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-addsale',
  templateUrl: './addsale.page.html',
  styleUrls: ['./addsale.page.scss'],
})
export class AddsalePage {
  userId: number;
  add: any = {product_id: '', customer_id: '', quantity: '', user_id: this.userId};
  productData: any;
  customerData: any;
  cusData: any [] = [];
  saleprData: any [] = [];
  responseBody: any;
  constructor(
    public model: ModelService,
    public invent: InventoryService,
    public alertCtrl: AlertController) {
    this.userId = this.model.getUserId();
    console.log(this.userId);
    this.getProduct();
    this.getCustomer();
   }

   addsale() {
     this.invent.addSale(this.add.product_id, this.add.customer_id, this.add.quantity, this.userId).then((result) => {
       const res: any = result;
       if (res.responseCode === 0) {
         this.presentAlert(res.responseMessage);
         this.add = {product_id: '', customer_id: '', quantity: ''};
        //  this.add.product_id = '';
        //  this.add.product_id = ;
       } else if (res.responseCode === -1000) {
         this.presentAlert(res.responseMessage);
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
          this.saleprData.push(this.productData[i]);
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

  getCustomerId(id) {
    console.log(id + 'iiuuuy');
      }

  getCustomer() {
    this.invent.getCustomers().then((res) => {
      this.responseBody = res;
      if (this.responseBody.responseCode === 0) {
        this.customerData = this.responseBody.customerData;
        for (let i = 0; i < this.customerData.length; i++){
          this.cusData.push(this.customerData[i]);
        }
      } else {
        console.log('failed');
      }
    }).catch((err) => {
    });
  }

  async presentAlert(msg: string) {
    const alert = await this.alertCtrl.create({
      header: 'Success',
    //  subHeader: 'Subtitle',
      message: msg,
      buttons: ['OK']
    });

    await alert.present();
  }

}
