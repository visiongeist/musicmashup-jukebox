import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import {SocketService} from "../../providers/socket-service";



/*
  Generated class for the HostPartyPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'build/pages/host-party/host-party.html',
})
export class HostPartyPage {
  beacon: boolean;

  constructor(private nav: NavController, private socketService: SocketService) {

  }


  goToTabsPage() {
    this.socketService.isAdmin = true;
    this.socketService.sendMessage('createRoom', { title: "Title", hasBeacon: this.beacon });
  }
}
