import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Tab1detailPageRoutingModule } from './tab1detail-routing.module';

import { Tab1detailPage } from './tab1detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Tab1detailPageRoutingModule
  ],
  declarations: [Tab1detailPage]
})
export class Tab1detailPageModule {}
