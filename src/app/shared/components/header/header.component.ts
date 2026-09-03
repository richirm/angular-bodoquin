import { Component } from '@angular/core';
import { NavService } from '../../services/nav.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

    constructor(private navService: NavService) {}

    onClickMenu() {
        this.navService.onOpen.next();

    }

}
