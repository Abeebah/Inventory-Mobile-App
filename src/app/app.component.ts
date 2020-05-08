import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  navigate: any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public router: Router,
  ) {
    this.sideMenu();
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  sideMenu() {
    this.navigate =
    [
      {
        title : 'User Profile',
        url : '/dashboard',
        icon : 'contact'
      },
      {
        title : 'View Stock',
        url : '/stock',
        icon : 'eye'
      },
      {
        title : 'View Sales',
        url : '/sales',
        icon : 'eye'
      },
      {
        title : 'Add Sale',
        url : '/addsale',
        icon : 'add'
      },
      {
        title : 'View Purchase',
        url : '/purchases',
        icon : 'eye'
      },
      {
        title : 'Add Purchase',
        url : '/addpurchase',
        icon : 'add'
      },
      {
        title : 'Add Customer',
        url : '/addcustomer',
        icon : 'add'
      },
      // {
      //   title : 'Logout',
      //   url : '/home',
      //   icon : 'log-out'
      // },
    ];
  }
  logout() {
    localStorage.clear();
  //  sessionStorage.clear();
    this.router.navigateByUrl('/home');
  }
}
