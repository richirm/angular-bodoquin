import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CardModule } from 'src/app/shared/components/card/card.module';
import { JuguetesComponent } from './juguetes.component';
import { JuguetesRoutingModule } from '../juguetes/juguetes-routing.module';
import { JuguetesService } from './services/juguetes.service';

@NgModule({
    declarations: [JuguetesComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        JuguetesRoutingModule,
        CardModule
    ],
    providers: [
        JuguetesService
    ],
})
export class JuguetesModule {}

