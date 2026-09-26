import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ejemplo',
    loadChildren: () => import('./pages/ejemplo/ejemplo.module').then(m => m.EjemploModule)
  },
  {
    path: 'carros',
    loadChildren: () => import('./pages/carros/carros.module').then(m => m.CarrosModule)
  },
  {
    path: 'videojuegos',
    loadChildren: () => import('./pages/videojuegos/videojuegos.module').then(m => m.VideojuegosModule)
  },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
