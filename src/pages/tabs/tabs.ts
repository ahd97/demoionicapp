import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { AddPage } from '../add/add';
import { GetdemoPage } from '../getdemo/getdemo';
import { AddDemoPage } from '../add-demo/add-demo';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  tab4Root = AddPage;
  tab5Root = GetdemoPage;
  tab6Root = AddDemoPage;

  constructor() {

  }
}
