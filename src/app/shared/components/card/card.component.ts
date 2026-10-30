import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent {
    @Input() title: string = '';
    @Input() subtitle: string = '';
    @Input() price: number = 0;
    @Input() percentage: number = 0;
    @Input() imageUrl: string = '';
}
