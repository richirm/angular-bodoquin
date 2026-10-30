import { NgModule } from '@angular/core';

import { VideojuegosRoutingModule } from './videojuegos-routing.module';
import { VideojuegosComponent } from './videojuegos.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [VideojuegosComponent],
    imports: [VideojuegosRoutingModule, CardModule, CommonModule],
    providers: [],
})
export class VideojuegosModule {}
