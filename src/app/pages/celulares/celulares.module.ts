import { NgModule } from "@angular/core";
import { CelularesComponent } from "./celulares.component";
import { CelularesRoutingModule } from "./celulares-routing.module";
import { CelularesService } from "./service/celulares.service";
import { HttpClientModule } from "@angular/common/http";
import { CardModule } from "src/app/shared/components/card/card.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [CelularesComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        CelularesRoutingModule,
        CardModule,
    ],
    providers: [
        CelularesService,
    ],
})
export class CelularesModule {}