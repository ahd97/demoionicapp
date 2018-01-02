import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Color } from '../../models/color';
import { ColorProvider } from '../../providers/color/color';
import { Design } from '../../models/design';
import { DesignDataProvider } from '../../providers/design-data/design-data';
import { NgModel } from '@angular/forms/src/directives/ng_model';
 import { Console } from '@angular/core/src/console';
/**
 * Generated class for the GetdemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-getdemo',
  templateUrl: 'getdemo.html',
})
export class GetdemoPage {
  colors:Color[]=[];
  designs:Design[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,public _data:ColorProvider,public _data1:DesignDataProvider) {
  }

  ionViewDidLoad() {
    this._data.getAllColor().subscribe((data:Color[])=>{
      this.colors=data;
      console.log(data);
    },
    function(err){
      alert(err);
    },
    function(){
      console.log('done');
    }
  );
   this._data1.getAllDesign().subscribe((data:Design[])=>{
     this.designs=data;
     console.log(data);
   },
   function(err){
     alert(err);
   },
   function(){
     console.log('done');
   }
 );
  }

}
