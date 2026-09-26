import { NgModule } from '@angular/core';

import { VideojuegosRoutingModule } from './videojuegos-routing.module';
import { VideojuegosComponent } from './videojuegos.component';

@NgModule({
    declarations: [VideojuegosComponent],
    imports: [VideojuegosRoutingModule],
    providers: [],
})
export class VideojuegosModule {}