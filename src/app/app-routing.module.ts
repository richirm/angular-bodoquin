import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'ejemplo',
    loadChildren: () => import('./pages/ejemplo/ejemplo.module').then(m => m.EjemploModule)
  },
  {
    path: 'peliculas',
    loadChildren: () => import('./pages/peliculas/peliculas.module').then(m => m.PeliculasModule)
  },
  {
    path: 'carros',
    loadChildren: () => import('./pages/carros/carros.module').then(m => m.CarrosModule)
  },
  {
    path: 'casas',
    loadChildren: () => import('./pages/casas/casas.module').then(m => m.CasasModule)
  },
  {
    path: 'motos',
    loadChildren: () => import('./pages/motos/motos.module').then(m => m.MotosModule)
  },
  {
    path: 'juguetes',
    loadChildren: () => import('./pages/juguetes/juguetes.module').then(m => m.JuguetesModule)
  },
  {
    path: 'videojuegos',
    loadChildren: () => import('./pages/videojuegos/videojuegos.module').then(m => m.VideojuegosModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
