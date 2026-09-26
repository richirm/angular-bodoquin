import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'videojuegos',
    loadChildren: () => import('./pages/videojuegos/videojuegos.module').then(m => m.VideojuegosModule) 
  },
  {
    path:'carros',
    loadChildren: () => import('./pages/carros/carros.module').then(m => m.CarrosModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
