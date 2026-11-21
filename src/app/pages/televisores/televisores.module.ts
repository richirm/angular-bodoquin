import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { TelevisoresRoutingModule } from './televisores-routing.module';
import { TelevisoresComponent } from './televisores.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { TelevisoresService } from './services/televisores.service';

@NgModule({
    declarations: [TelevisoresComponent],
    imports: [
        CommonModule, 
        HttpClientModule,
        TelevisoresRoutingModule,
        CardModule,
    ],
    providers: [
        TelevisoresService
    ],
})
export class TelevisoresModule {}
