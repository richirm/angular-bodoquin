import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { VideojuegosRoutingModule } from './videojuegos-routing.module';
import { VideojuegosComponent } from './videojuegos.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { VideojuegosService } from './service/videojuegos.service';

@NgModule({
    declarations: [VideojuegosComponent],
    imports: [
        CommonModule, 
        HttpClientModule,
        VideojuegosRoutingModule,
        CardModule,
    ],
    providers: [
        VideojuegosService
    ],
})
export class VideojuegosModule {}
