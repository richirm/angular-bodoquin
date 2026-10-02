import { NgModule } from "@angular/core";
import { VideojuegosComponent } from "./videojuegos.component";
import { VideojuegosRoutingModule } from "./videoJuegos-routing.module";

@NgModule({
    declarations: [VideojuegosComponent],
    imports: [VideojuegosRoutingModule],
    providers: [],
})
export class VideojuegosModule {}