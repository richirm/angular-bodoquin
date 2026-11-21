import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { VideojuegosService } from './services/videojuegos.service';

@Component({
    selector: 'app-videojuegos',
    templateUrl: './videojuegos.component.html',
    styleUrls: ['./videojuegos.component.scss']
})
export class VideojuegosComponent implements OnInit {

    videojuegos: Product[] = [];

    constructor(private videosjuegosService: VideojuegosService) {}

    ngOnInit() {
        this.getVideojuegos();
    }
    
    getVideojuegos() {
        this.videosjuegosService.getVideojuegos().subscribe((response) => {
            this.videojuegos = response;
        });
    }
}
