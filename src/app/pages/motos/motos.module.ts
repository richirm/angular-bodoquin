import { NgModule } from "@angular/core";
import { MotosComponent } from "./motos.component";
import { MotosRoutingModule } from "./motos-routing.module";
import { MotosService } from "./service/motos.service";
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { CardModule } from "src/app/shared/components/card/card.module";

@NgModule({
    declarations: [MotosComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        MotosRoutingModule,
        CardModule
    ],
    providers: [
        MotosService
    ],
})
export class MotosModule {}