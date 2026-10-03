import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { casasComponent } from "./casas.component";

const routes: Routes = [
    {
        path: '',
        component: casasComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class casasRoutingModule {}