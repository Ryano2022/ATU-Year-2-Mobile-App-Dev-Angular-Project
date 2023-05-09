import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExtinctionPage } from './extinction.page';

const routes: Routes = [
  {
    path: '',
    component: ExtinctionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExtinctionPageRoutingModule {}
