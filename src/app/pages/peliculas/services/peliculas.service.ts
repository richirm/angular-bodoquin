import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from 'src/app/shared/interfaces/product.interface';

@Injectable()
export class PeliculasService {

    constructor(private http: HttpClient) {}

    getPeliculas(): Observable<Product[]> {
        return this.http.get<Product[]>('https://6aebf644ee39618d7bf8b6c3.mockapi.io/bodoquin/api/peliculas');
    }

    deletePeliculas() {
        // DELETE
    }

    crearPeliculas() {
        // POST
    }

    actualizaPeliculas() {
        // PUT
    }

}