import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';


/*
  Generated class for the LandingPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/landing/landing.html',
})
export class LandingPage {
  constructor(private nav: NavController) {

  }

    goToTabsPage() {
      this.nav.setRoot(TabsPage);
    }

}