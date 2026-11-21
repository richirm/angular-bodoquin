import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { VideojuegosService } from './service/videojuegos.service';

@Component({
    selector: 'app-videojuegos',
    templateUrl: './videojuegos.component.html',
    styleUrls: ['./videojuegos.component.scss']
})
export class VideojuegosComponent implements OnInit {

    videojuegos: Product[] = []

    constructor(private videojuegosService: VideojuegosService) { }

    ngOnInit(): void {
        this.getVideojuegos();
    }

    getVideojuegos() {
        this.videojuegosService.getVideojuegos().subscribe((response) => {
            this.videojuegos = response;
        })

    }
}
