import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/shared/interfaces/product.interface';
import { CasasService } from './services/casas.services';

@Component({
    selector: 'app-casas',
    templateUrl: './casas.component.html',
    styleUrls: ['./casas.component.scss']
})
export class CasasComponent implements OnInit {

    casas: Product[] = [];

    constructor(private casasService: CasasService) {}

    ngOnInit() {
        this.getCasas();
    }

    getCasas() {        
        this.casasService.getCasas().subscribe((response) => {
            this.casas = response;
        });
    }

}


