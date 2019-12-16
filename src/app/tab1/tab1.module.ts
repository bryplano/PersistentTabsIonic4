import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: Tab1Page },
      { path: 'tab1detail', loadChildren: () => import('../tab1detail/tab1detail.module').then(m => m.Tab1detailPageModule)
      }
    ])
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
