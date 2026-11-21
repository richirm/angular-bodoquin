import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/shared/interfaces/product.interface';
import { JuguetesService } from './services/juguetes.service';

@Component({
    selector: 'app-juguetes',
    templateUrl: './juguetes.component.html',
    styleUrls: ['./juguetes.component.scss']
})
export class JuguetesComponent implements OnInit {

    juguetes: Product[] = [];

    constructor(private juguetesService: JuguetesService) {}

    ngOnInit() {
        this.getjuguetes();
    }

    getjuguetes() {        
        this.juguetesService.getJuguetes().subscribe((response) => {
            this.juguetes = response;
        });
    }

}


