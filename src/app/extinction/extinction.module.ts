import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExtinctionPageRoutingModule } from './extinction-routing.module';

import { ExtinctionPage } from './extinction.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExtinctionPageRoutingModule
  ],
  declarations: [ExtinctionPage]
})
export class ExtinctionPageModule {}
