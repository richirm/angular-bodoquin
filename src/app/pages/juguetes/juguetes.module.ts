import { NgModule } from "@angular/core";
import { juguetesComponent } from "./juguetes.component";
import { juguetesRoutingModule } from "./juguetes-routing.module";

@NgModule({
    declarations: [juguetesComponent],
    imports: [juguetesRoutingModule],
    providers: [],
})
export class juguetesModule {}