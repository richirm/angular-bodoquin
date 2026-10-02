import { NgModule } from "@angular/core";
import { carrosComponent } from "./carros.component";
import { carrosRoutingModule } from "./carros-routing.module";

@NgModule({
    declarations: [carrosComponent],
    imports: [carrosRoutingModule],
    providers: [],
})
export class carrosModule {}