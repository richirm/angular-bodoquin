import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarrosRoutingModule } from './carros-routing.module';
import { CarrosComponent } from './carros.component';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
    declarations: [CarrosComponent],
    imports: [
        CommonModule,
        CarrosRoutingModule,
        CardModule
    ],
    providers: [],
})
export class CarrosModule {}
