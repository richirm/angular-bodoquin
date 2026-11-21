import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/interfaces/product.interface';
import { TelevisoresService } from './services/televisores.service';

@Component({
  selector: 'app-televisores',
  templateUrl: './televisores.component.html',
  styleUrls: ['./televisores.component.scss']
})
export class TelevisoresComponent implements OnInit {
    televisores: Product[] = []

    constructor(private televisoresService: TelevisoresService) {}

    ngOnInit(): void {
        this.getTelevisores();
    }

    getTelevisores() {
        this.televisoresService.getTelevisores().subscribe((response) =>{
            this.televisores = response;
        })

    }
    
}
