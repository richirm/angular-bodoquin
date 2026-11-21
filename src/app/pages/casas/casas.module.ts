import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { CardModule } from 'src/app/shared/components/card/card.module';
import { CasasRoutingModule } from './casas-routing.module';
import { CasasService } from './services/casas.services';
import { CasasComponent } from './casas.component';

@NgModule({
    declarations: [CasasComponent],
    imports: [
        CommonModule,
        HttpClientModule,
        CasasRoutingModule,
        CardModule
    ],
    providers: [
        CasasService
    ],
})
export class CasasModule {}