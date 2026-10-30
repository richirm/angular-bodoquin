import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './peliculas.component';
import { CardModule } from 'src/app/shared/components/card/card.module';

@NgModule({
    declarations: [PeliculasComponent],
    imports: [
        CommonModule, 
        PeliculasRoutingModule,
        CardModule
    ],
    providers: [],
})
export class PeliculasModule {}
