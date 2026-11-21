import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './peliculas.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { PeliculasService } from './services/peliculas.services';

@NgModule({
    declarations: [PeliculasComponent],
    imports: [
        CommonModule, 
        HttpClientModule,
        PeliculasRoutingModule,
        CardModule
    ],
    providers: [
        PeliculasService
    ],
})
export class PeliculasModule {}
