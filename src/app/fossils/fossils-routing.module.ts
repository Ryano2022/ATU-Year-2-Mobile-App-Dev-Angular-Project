import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FossilsPage } from './fossils.page';

const routes: Routes = [
  {
    path: '',
    component: FossilsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FossilsPageRoutingModule {}
