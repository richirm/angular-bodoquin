import { Component } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.interface';

@Component({
    selector: 'app-carros',
    templateUrl: './carros.component.html',
    styleUrls: ['./carros.component.scss']
})
export class CarrosComponent {

    carros: Product [] = [
        {
            id: 1,
            title: 'Toyota',
            subtitle: 'Corola, camry 1991',
            price: 25000.00,
            percentage: 0.12,
            imageUrl: 'carro_rojo1.jpg',
        },

        {
            id: 2,
            title: 'Honda',
            subtitle: 'Civic, acoord 205',
            price: 20000.00,
            percentage: 0.10,
            imageUrl: 'carro_gris2.png',
        },

        {
            id: 3,
            title: 'Hyundai',
            subtitle: 'Elantra, mod 2017',
            price: 40000.00,
            percentage: 0.8,
            imageUrl: 'carro_rojo1.jpg',
        },

        {
            id: 4,
            title: 'Renault',
            subtitle: 'spoler, 2026',
            price: 60000.00,
            percentage: 0.15,
            imageUrl:'carro_gris2.png',
        },

        {
            id: 5,
            title: 'Jac',
            subtitle: 'js2, acoord 205',
            price: 38000.00,
            percentage: 0.10,
            imageUrl: 'carro_rojo1.jpg',
        },
 
        {
            id: 6,
            title: 'Jetour',
            subtitle: 'gran Nomade, acoord 205',
            price: 35000.00,
            percentage: 0.20,
            imageUrl: 'carro_gris2.png',
        }
    ]
}
