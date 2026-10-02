import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'peliculas',
    loadChildren: () => import('./pages/peliculas/peliculas.module').then(m => m.PeliculasModule)
  },
  {
    path: 'carros',
    loadChildren: () => import('./pages/carros/carros.module').then(m => m.carrosModule)
  },
  {
    path: 'casas',
    loadChildren: () => import('./pages/casas/casas.module').then(m => m.casasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
