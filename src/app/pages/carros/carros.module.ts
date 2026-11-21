import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CarrosRoutingModule } from './carros-routing.module';
import { CarrosComponent } from './carros.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { CarrosService } from './services/carros.service';

@NgModule({
    declarations: [CarrosComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        CarrosRoutingModule,
        CardModule
    ],
    providers: [
        CarrosService
    ],
})
export class CarrosModule {}
