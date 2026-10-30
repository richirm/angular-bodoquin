import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideojuegosRoutingModule } from './videojuegos-routing.module';
import { VideojuegosComponent } from './videojuegos.component';

import { CardModule } from 'src/app/shared/components/card/card.module'

@NgModule({
    declarations: [VideojuegosComponent],
    imports: [
        CommonModule, 
        VideojuegosRoutingModule,
        CardModule
    ],
    providers: [],
})
export class VideojuegosModule {}
