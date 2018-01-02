import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDemoPage } from './add-demo';

@NgModule({
  declarations: [
    AddDemoPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDemoPage),
  ],
})
export class AddDemoPageModule {}
