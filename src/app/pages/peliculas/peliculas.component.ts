import { Component } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/prooduct.interface';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.scss']
})
export class PeliculasComponent {
  peliculas: Product[] = [
          {
              id: 1,
              title: 'Resident Evil',
              subtitle: 'Juego de terror y supervivencia',
              price: 25000,
              percentage: 0.12,
              imageUrl: 'pelicula_1.png'
          },
          {
              id: 2,
              title: 'Crash Bandicoot',
              subtitle: 'Aventura, plataformas y desafíos',
              price: 18000,
              percentage: 0.10,
              imageUrl: 'pelicula_2.png'
          },
          {
              id: 3,
              title: 'Tekken',
              subtitle: 'Juego de lucha con combates uno contra uno',
              price: 15000,
              percentage: 0.08,
              imageUrl: 'pelicula_3.png'
          },
          {
              id: 4,
              title: 'Pokémon',
              subtitle: 'Captura, entrena y colecciona criaturas',
              price: 20000,
              percentage: 0.09,
              imageUrl: 'pelicula_4.png'
          },
          {
              id: 5,
              title: 'Dragon Ball',
              subtitle: 'Combates y aventuras de Goku y sus amigos',
              price: 22000,
              percentage: 0.11,
              imageUrl: 'pelicula_5.png'
          },
          {
              id: 6,
              title: 'Pac-Man',
              subtitle: 'Juego arcade de laberintos y fantasmas',
              price: 35000,
              percentage: 0.15,
              imageUrl: 'pelicula_6.png'
          }
      ];
}
