import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/shared/interfaces/product.interface';
import { CarrosService } from './services/carros.service';

@Component({
    selector: 'app-carros',
    templateUrl: './carros.component.html',
    styleUrls: ['./carros.component.scss']
})
export class CarrosComponent implements OnInit {

    carros: Product[] = [];

    constructor(private carrosService: CarrosService) {}

    ngOnInit() {
        this.getCarros();
    }

    getCarros() {        
        this.carrosService.getCarros().subscribe((response) => {
            this.carros = response;
        });
    }

}
