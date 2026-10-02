import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { carrosComponent } from "./carros.component";

const routes: Routes = [
    {
        path: '',
        component: carrosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class carrosRoutingModule {}