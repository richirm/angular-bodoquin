import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CelularesComponent } from "./celulares.component";

const routes: Routes = [
    {
        path: '',
        component: CelularesComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CelularesRoutingModule {}