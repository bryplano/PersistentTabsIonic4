import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private navController: NavController) {}

  showDetailWithTabs() {
    this.navController.navigateForward(['tabs', 'tab2', 'tab1detail'])
  }

  showDetailOverTabs() {
    this.navController.navigateForward(['tab1detail']);
  }

}
