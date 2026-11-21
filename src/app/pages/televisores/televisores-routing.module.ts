
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TelevisoresComponent } from './televisores.component';

const routes: Routes = [
    {
        path: '',
        component: TelevisoresComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TelevisoresRoutingModule {}
