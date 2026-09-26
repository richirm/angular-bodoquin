import { NgModule } from '@angular/core';

import { CarrosRoutingModule } from './carros-routing.module';
import { CarrosComponent } from './carros.component';

@NgModule({
    declarations: [CarrosComponent],
    imports: [CarrosRoutingModule],
    providers: [],
})
export class CarrosModule {}