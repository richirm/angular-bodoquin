import { NgModule } from '@angular/core';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { PeliculasComponent } from './peliculas.component';

@NgModule({
  declarations: [PeliculasComponent],
  imports: [PeliculasRoutingModule]
})
export class PeliculasModule {}