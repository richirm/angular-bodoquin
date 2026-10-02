import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { motosComponent } from "./motoscomponent";

const routes: Routes = [
    {
        path: '',
        component: motosComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class motosRoutingModule {}