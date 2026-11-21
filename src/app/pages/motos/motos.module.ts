import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MotosRoutingModule } from './motos-routing.module';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { HttpClientModule } from '@angular/common/http';
import { MotosComponent } from './motos.component';
import { MotosService } from './services/motos.service';

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