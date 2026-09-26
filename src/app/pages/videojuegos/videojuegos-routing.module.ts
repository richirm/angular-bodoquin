import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { VideojuegosComponent } from "./videojuegos.component";

const routes: Routes= [
   {  
      path: '',
      component: VideojuegosComponent
   }  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VideojuegosRoutingModule{}