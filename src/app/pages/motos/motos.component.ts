import { Component, OnInit } from '@angular/core';

import { Product } from 'src/app/shared/interfaces/product.interface';
import { MotosService } from './services/motos.service';

@Component({
    selector: 'app-motos',
    templateUrl: './motos.component.html',
    styleUrls: ['./motos.component.scss']
})
export class MotosComponent implements OnInit {

    motos: Product[] = [];

    constructor(private motosService: MotosService) {}

    ngOnInit() {
        this.getMotos();
    }

    getMotos() {        
        this.motosService.getMotos().subscribe((response) => {
            this.motos = response;
        });
    }

}