import { Component } from '@angular/core';
import { InventoryService } from '../inventory.service';
import { NavController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { ModelService } from '../model.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
user: any = {username: '', password: ''};
  constructor(
    public invent: InventoryService,
    public navCtrl: NavController,
    public router: Router,
    public alertCtrl: AlertController,
    public model: ModelService) {}

  login() {
    if ( this.user.username !== '' && this.user.password !== '') {
    this.invent.userLogin(this.user.username, this.user.password).then((result) => {
      const res: any = result;
      if (res.shortCode === 0) {
        this.model.setUserId(res.id);
        this.model.setFirstName(res.firstName);
        this.model.setLastName(res.lastName);
        this.model.setEmail(res.email);
        this.model.setUserName(res.username);
        this.model.setCompany(res.company);
        this.presentAlert(res.shortMessage);
        this.router.navigateByUrl('/dashboard');
        this.user.username = '';
        this.user.password = '';
      } else if (res.shortCode === -1000) {
        this.presentAlert(res.shortMessage);
      }
      console.log(result);
    }, (err) => {
      console.log(err);
    });
  } else {
    this.presentAlert('All Field are required');
  }
  }

  async presentAlert(msg: string) {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
   //   subHeader: 'Subtitle',
      message: msg,
      buttons: ['OK']
    });
    await alert.present();
  }
}
