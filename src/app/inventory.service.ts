import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { promise } from 'protractor';
import { resolve, reject } from 'q';
import { ResolveEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
 endpoint = 'http://localhost:8080/InventoryWebServices/rs/inventory';
 link: string;
 reqInfo: string ;
  constructor(public http: HttpClient) { 
  }

public userLogin(username, password) {
    this.link = this.endpoint + '/user?username='+username+'&password='+password;
   // const converter = JSON.stringify(loginInfo);
    return new Promise((resolve, reject) => {
    this.http.post(this.link, null).subscribe((res) => {
    resolve(res);
    console.log(res);
    }, (err) => {
    reject(err);
    console.log(err);
    });
    });
}

addSale( product_id, customer_id, quantity, user_id) {
  this.link = this.endpoint + '/sale?product_id='+product_id+'&customer_id='+customer_id+'&quantity='+quantity+'&user_id='+user_id;
 // const converter = JSON.stringify(loginInfo);
  return new Promise((resolve, reject) => {
  this.http.post(this.link, null).subscribe((res) => {
  resolve(res);
  console.log(res);
  }, (err) => {
  reject(err);
  console.log(err);
  });
  });
}

addPurchase(product,  quantity, user_id) {
  this.link = this.endpoint + '/purchase?product='+product+'&quantity='+quantity+'&user_id='+user_id;
 // const converter = JSON.stringify(loginInfo);
  return new Promise((resolve, reject) => {
  this.http.post(this.link, null).subscribe((res) => {
  resolve(res);
  console.log(res);
  }, (err) => {
  reject(err);
  console.log(err);
  });
  });
}

addCustomer(firstname, lastname, email, phone, address, user_id){
  this.link = this.endpoint + '/customer?firstname='+firstname+'&lastname='+lastname+'&email='+email+'&phone='+phone+'&address='+address+'&user_id='+user_id;
  return new Promise((resolve, reject) => {
    this.http.post(this.link, null).subscribe((res) => {
      resolve(res);
      console.log(res);
    }, (err) => {
      reject(err);
      console.log(err);
    });
  });
}


getSale() {
  this.link = this.endpoint + '/sales';
  return new Promise(resolve => {
    this.http.get(this.link).subscribe(res => {
      resolve(res);
      console.log(res);
    }, err => {
      console.log(err);
    });
  });
}

getProduct() {
  this.link = this.endpoint + '/products';
  return new Promise(resolve => {
    this.http.get(this.link).subscribe(res => {
      resolve(res);
      console.log(res);
    }, err => {
      console.log(err);
    });
  });
}

getCustomers() {
  this.link = this.endpoint + '/customer';
  return new Promise(resolve => {
    this.http.get(this.link).subscribe(res => {
      resolve(res);
      console.log(res);
    }, err => {
      console.log(err);
    });
  });
}

getPurchase() {
  this.link = this.endpoint + '/purchase';
  return new Promise(resolve => {
    this.http.get(this.link).subscribe(res => {
      resolve(res);
    }, err => {
      console.log(err);
    });
  });
}

getStock() {
  this.link = this.endpoint + '/products';
  return new Promise(resolve => {
    this.http.get(this.link).subscribe(res => {
      resolve(res);
    }, err => {
      console.log(err);
    });
  });
}
}

