import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Product } from '../product';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  add1:Product[]=[
    new Product(1,'ionic','assets/imgs/abc.png','Drifty'),
    new Product(2,'angular','assets/imgs/angular.jpg','Google'),
    new Product(3,'Visual Studio Code','assets/imgs/Visual-Studio-Code.jpg','Microsoft'),
    new Product(4,'Adobe Reader','assets/imgs/adobe-reader.png','Adobe'),
  ];
  constructor(public navCtrl: NavController) {

  }
  onAdd(title,creator){
    this.add1.push(new Product(1,title,'pendind',creator));
    
  }
  onDelete(item){
    this.add1.splice(this.add1.indexOf(item),1);
  }
}
