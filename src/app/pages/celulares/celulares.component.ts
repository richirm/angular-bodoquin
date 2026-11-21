import { Component, OnInit } from "@angular/core";
import { Product } from "src/app/shared/interfaces/product.interface";
import { CelularesService } from "./service/celulares.service";

@Component({
    selector: 'app-celulares',
    templateUrl: './celulares.component.html',
    styleUrls: ['./celulares.component.scss']
})
export class CelularesComponent implements OnInit {
    celulares: Product[] = [];
    
        constructor(private celularesService: CelularesService) {}
    
        ngOnInit() {
            this.getCelulares();
        }
    
        getCelulares() {
            this.celularesService.getCelulares().subscribe((response) =>{
                this.celulares = response;
            })
        }
}