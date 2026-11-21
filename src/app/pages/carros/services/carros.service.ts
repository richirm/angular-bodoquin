import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from 'src/app/shared/interfaces/product.interface';

@Injectable()
export class CarrosService {

    constructor(private http: HttpClient) {}

    getCarros(): Observable<Product[]> {
        return this.http.get<Product[]>('https://6aebf644ee39618d7bf8b6c3.mockapi.io/bodoquin/api/carros');
    }

    deleteCarro() {
        // DELETE
    }

    crearCarro() {
        // POST
    }

    actualizaCarro() {
        // PUT
    }

}