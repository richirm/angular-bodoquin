import { NgModule } from "@angular/core";
import { CasasComponent } from "./casas.component";
import { CasasRoutingModule } from "./casas-routing.module";
import { CasasService } from "./service/casas.service";
import { HttpClientModule } from "@angular/common/http";
import { CardModule } from "src/app/shared/components/card/card.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [CasasComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        CasasRoutingModule,
        CardModule,
    ],
    providers: [
        CasasService,
    ],
})
export class CasasModule {}