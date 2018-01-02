import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { City } from '../../models/city';
import { CityDataProvider } from '../../providers/city-data/city-data';

/**
 * Generated class for the AddDemoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-add-demo',
  templateUrl: 'add-demo.html',
})
export class AddDemoPage {

  city_name:string='';
  constructor(public navCtrl: NavController, public navParams: NavParams,public _data:CityDataProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDemoPage');
  }
onAdd(){
this._data.addCity(new City(0,this.city_name)).subscribe(
  ()=>{
this.navCtrl.pop();
  },function(err){

  },
  function(){

  }
);
}
}
