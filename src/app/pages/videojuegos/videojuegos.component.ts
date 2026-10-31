import { Component } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.interface';

@Component({
    selector: 'app-videojuegos',
    templateUrl: './videojuegos.component.html',
    styleUrls: ['./videojuegos.component.scss']
})
export class VideojuegosComponent {

    videojuegos: Product[] = [
        {
            id: 1,
            title: 'resident evil',
            subtitle: 'Muertos, vivientes y sangre y muchas cosas mas',
            price: 1000.00,
            percentage: 0.8,
            imageUrl: 'videojuego_1.png',
        },
        {
            id: 2,
            title: 'crash card',
            subtitle: 'patines, acoord 205',
            price: 20000.00,
            percentage: 0.10,
            imageUrl: 'videojuego_2.png',
        },
        {
            id: 3,
            title: 'teken ',
            subtitle: 'peleas, mod 2017',
            price: 150.00,
            percentage: 0.8,
            imageUrl: 'videojuego_3.png',
        },
        {
            id: 4,
            title: 'pokemon',
            subtitle: 'esnorla, 2026 pikachu',
            price: 105.00,
            percentage: 0.15,
            imageUrl: 'videojuego_4.png',
        },
        {
            id: 5,
            title: 'dragon ball',
            subtitle: 'peleara con el gran freezer',
            price: 870.00,
            percentage: 0.113,
            imageUrl: 'videojuego_5.png',
        },
        {
            id: 6,
            title: 'pacman',
            subtitle: 'preparado para comer ',
            price: 983.00,
            percentage: 0.10,
            imageUrl: 'videojuego_6.png',
        }
    ]
}
