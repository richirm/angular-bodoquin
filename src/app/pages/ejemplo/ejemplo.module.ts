import { NgModule } from '@angular/core';

import { EjemploRoutingModule } from './ejemplo-routing.module';
import { EjemploComponent } from './ejemplo.component';

@NgModule({
    declarations: [EjemploComponent],
    imports: [EjemploRoutingModule],
    providers: [],
})
export class EjemploModule {}