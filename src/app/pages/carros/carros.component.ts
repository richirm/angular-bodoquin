import { Component } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/prooduct.interface';

@Component({
    selector: 'app-carros',
    templateUrl: './carros.component.html',
    styleUrls: ['./carros.component.scss']
})
export class CarrosComponent {

    carros: Product[] = [
        {
            id: 1,
            title: 'Toyota',
            subtitle: 'Corola, Camry 1999 Corola, Camry 1999 Corola, Camry 1999',
            price: 25000,
            percentage: 0.12,
            imageUrl: 'carro_rojo1.jpg'
        },
        {
            id: 2,
            title: 'Honda',
            subtitle: 'Civic, Accord 2005',
            price: 18000,
            percentage: 0.1,
            imageUrl: 'carro_gris2.png'
        },
        {
            id: 3,
            title: 'Ford',
            subtitle: 'Focus, Fiesta 2010',
            price: 15000,
            percentage: 0.08,
            imageUrl: 'carro_rojo1.jpg'
        },
        {
            id: 4,
            title: 'Chevrolet',
            subtitle: 'Malibu, Impala 2012',
            price: 20000,
            percentage: 0.09,
            imageUrl: 'carro_gris2.png'
        },
        {
            id: 5,
            title: 'Nissan',
            subtitle: 'Altima, Sentra 2015',
            price: 22000,
            percentage: 0.11,
            imageUrl: 'carro_rojo1.jpg'
        },
        {
            id: 6,
            title: 'BMW',
            subtitle: '3 Series, 5 Series 2018',
            price: 35000,
            percentage: 0.15,
            imageUrl: 'carro_gris2.png'
        }
    ];
}
