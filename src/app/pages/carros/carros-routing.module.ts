import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CarrosComponent } from "./carros.component";

const routes: Routes= [
   {  
      path: '',
      component: CarrosComponent
   }  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CarrosRoutingModule{}