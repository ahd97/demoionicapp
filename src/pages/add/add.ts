import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Tasks } from '../Tasks';

/**
 * Generated class for the AddPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {
arr:Tasks[]=[
  new Tasks(1,'abc','pending'),
  new Tasks(1,'efg','pending'),
  new Tasks(1,'xyz','done')
];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddPage');
  }
onAdd(id,title){
  this.arr.push(new Tasks(id,title,'pendind'));
  
}
onDelete(item){
  this.arr.splice(this.arr.indexOf(item),1);
}
onEdit(item){
  if(item.Status=='done')
  {
    item.Status='pending';
  }
  else
  {
    item.Status='done';
  }
}
}
