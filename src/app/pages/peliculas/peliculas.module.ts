import { NgModule } from "@angular/core";
import { PeliculasComponent } from "./peliculas.component";
import { PeliculasRoutingModule } from "./peliculas-routing.module";

@NgModule({
    declarations: [PeliculasComponent],
    imports: [PeliculasRoutingModule],
    providers: [],
})
export class PeliculasModule {}