import { Component } from '@angular/core';
import {  NavController, NavParams } from 'ionic-angular';
import { Tasks } from '../Tasks';
import { NgModel } from '@angular/forms/src/directives/ng_model';

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
  id:any='';
  title:string='';

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
  this.arr.push(new Tasks(id,title,'pending'));
  this.id='' ;
  this.title='';
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
