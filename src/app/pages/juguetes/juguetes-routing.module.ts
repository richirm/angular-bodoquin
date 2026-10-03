import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { juguetesComponent } from "./juguetes.component";

const routes: Routes = [
    {
        path: '',
        component: juguetesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class juguetesRoutingModule {}