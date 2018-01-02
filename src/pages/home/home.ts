import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CityDataProvider  } from '../../providers/city-data/city-data';
import { City } from '../../models/city';
import { UserDataProvider } from '../../providers/user-data/user-data';
import { User_master } from '../../models/User_master';
import { Console } from '@angular/core/src/console';
import { AddDemoPage } from '../add-demo/add-demo';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cities:City[]=[];
  users:User_master[]=[];
  constructor(public navCtrl: NavController,public _data:CityDataProvider,public _data1:UserDataProvider) {

  }
  onDelete(item){
    this._data.deleteCity(item.City_id).subscribe(()=>{

      this.cities.splice(this.cities.indexOf(item),1);
    });
  }
  onAdd(){
    this.navCtrl.push(AddDemoPage);
  }
  ionViewDidLoad() {
    this._data1.getAllUser().subscribe((data:User_master[])=>{
      this.users=data;
      console.log(data);
    },
    function(err){
      alert(err);
    },
    function(){
      console.log('patyu');
    }
  );
  
    this._data.getAllCities().subscribe((data:City[])=>{

        this.cities=data;
        console.log(data);
    },
  function(err){
    alert(err);
  },
  function(){
    console.log('patyu');
  }
  );
  }

}
