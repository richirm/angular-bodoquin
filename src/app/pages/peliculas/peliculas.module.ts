import { NgModule } from '@angular/core';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './peliculas.component';
import { CardModule } from 'src/app/shared/components/card/card.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [PeliculasComponent],
  imports: [PeliculasRoutingModule, CardModule, CommonModule],
})
export class PeliculasModule {}
