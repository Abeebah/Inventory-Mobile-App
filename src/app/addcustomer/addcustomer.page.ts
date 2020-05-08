import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../inventory.service';
import {ModelService} from '../model.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-addcustomer',
  templateUrl: './addcustomer.page.html',
  styleUrls: ['./addcustomer.page.scss'],
})
export class AddcustomerPage {
  userId: number;
customer: any = { firstName: '', lastName: '', email: '', phone: '', address: '', user_id: this.userId };
  constructor(public invent: InventoryService, public model: ModelService, public alertCtrl: AlertController) {
    this.userId = this.model.getUserId();
    console.log(this.userId);
   }

addCustomer() {
    this.invent.addCustomer(this.customer.firstName, this.customer.lastName, this.customer.email,
       this.customer.phone, this.customer.address, this.userId ).then((result) => {
        const res: any = result;
        if ( res.shortCode === 0 ) {
          this.showAlert(res.shortMessage);
          this.customer = { firstName: '', lastName: '', email: '', phone: '', address: ''};
        } else if (res.responseCode === -1000) {
          this.showAlert(res.responseMessage);
        }
        console.log(result);
       }, (err) => {
         console.log(err);
       });
  }

  async showAlert(msg: string) {
    const alert = await this.alertCtrl.create({
      header: 'Success',
    //  subHeader: 'Subtitle',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }
}
