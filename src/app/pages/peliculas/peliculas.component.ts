import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { PeliculasService } from './services/peliculas.services';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent implements OnInit {
    peliculas: Product[] = []

    constructor(private peliculasService: PeliculasService) {}

    ngOnInit(): void {
        this.getPeliculas();
    }

    getPeliculas() {
        this.peliculasService.getPeliculas().subscribe((response) =>{
            this.peliculas = response;
        })

    }
    
}
