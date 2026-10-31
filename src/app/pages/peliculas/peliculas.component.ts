import { Component } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.interface';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent {
    peliculas: Product[] = [
        {
            id: 1,
            title: 'resident evil',
            subtitle: 'la vi en el cine',
            price: 20.00,
            percentage: 0.2,
            imageUrl: 'pelicula_1.png',
        },
        {
            id: 2,
            title: 'titanic',
            subtitle: 'muy romantico',
            price: 345.00,
            percentage: 0.10,
            imageUrl: 'pelicula_2.png',
        },
        {
            id: 3,
            title: 'soy leyenda ',
            subtitle: 'esperaremos ha que salga la dos',
            price: 666.00,
            percentage: 0.5,
            imageUrl: 'pelicula_3.png',
        },
        {
            id: 4,
            title: 'fredy cruger',
            subtitle: 'se peleo con jaison',
            price: 989.00,
            percentage: 0.15,
            imageUrl: 'pelicula_4.png',
        },
        {
            id: 5,
            title: 'guerra mundial z',
            subtitle: 'siempre la vemos',
            price: 105.00,
            percentage: 0.18,
            imageUrl: 'pelicula_5.png',
        },
        {
            id: 6,
            title: 'la vida es bella',
            subtitle: 'es una novela ',
            price: 21.00,
            percentage: 0.5,
            imageUrl: 'pelicula_6.png',
        }
    ]
}
