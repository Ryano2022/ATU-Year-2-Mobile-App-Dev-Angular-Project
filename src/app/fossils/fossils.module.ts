import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FossilsPageRoutingModule } from './fossils-routing.module';

import { FossilsPage } from './fossils.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FossilsPageRoutingModule
  ],
  declarations: [FossilsPage]
})
export class FossilsPageModule {}
