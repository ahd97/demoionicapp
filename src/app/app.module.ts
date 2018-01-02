import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { GetdemoPage } from '../pages/getdemo/getdemo';
import { AddPage } from '../pages/add/add';
import { AddDemoPage } from '../pages/add-demo/add-demo';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CityDataProvider } from '../providers/city-data/city-data';
import { UserDataProvider } from '../providers/user-data/user-data';
import { ColorProvider } from '../providers/color/color';
import { DesignDataProvider } from '../providers/design-data/design-data';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddPage,
    GetdemoPage,
    AddDemoPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AddPage,
    GetdemoPage,
    AddDemoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CityDataProvider,
    UserDataProvider,
    ColorProvider,
    DesignDataProvider
  ]
})
export class AppModule {}
