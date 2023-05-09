import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },  {
    path: 'species',
    loadChildren: () => import('./species/species.module').then( m => m.SpeciesPageModule)
  },
  {
    path: 'fossils',
    loadChildren: () => import('./fossils/fossils.module').then( m => m.FossilsPageModule)
  },
  {
    path: 'extinction',
    loadChildren: () => import('./extinction/extinction.module').then( m => m.ExtinctionPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
