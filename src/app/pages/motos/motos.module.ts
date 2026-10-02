import { NgModule } from "@angular/core";
import { motosRoutingModule } from "./motos-routing.module";
import { motosComponent } from "./motoscomponent";

@NgModule({
    declarations: [motosComponent],
    imports: [motosRoutingModule],
    providers: [],
})
export class motosModule {}