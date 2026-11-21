import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from 'src/app/shared/interfaces/product.interface';

@Injectable()
export class MotosService {

    constructor(private http: HttpClient) {}

    getMotos(): Observable<Product[]> {
        return this.http.get<Product[]>('https://6aebf644ee39618d7bf8b6c3.mockapi.io/bodoquin/api/motos');
    }

    deleteMotos() {
        // DELETE
    }

    crearMotos() {
        // POST
    }

    actualizaMotos() {
        // PUT
    }

}