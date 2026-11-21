import { NgModule } from "@angular/core";
import { JuguetesComponent } from "./juguetes.component";
import { JuguetesRoutingModule } from "./juguetes-routing.module";
import { CardModule } from "src/app/shared/components/card/card.module";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { JuguetesService } from "./service/juguetes.service";

@NgModule({
    declarations: [JuguetesComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        JuguetesRoutingModule,
        CardModule,
    ],
    providers: [
        JuguetesService
    ],
})
export class JuguetesModule {}
