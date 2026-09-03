import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subject, takeUntil } from "rxjs";

import { NavService } from "../../services/nav.service";

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy {

    isOpen: boolean = true;

    destroy$ = new Subject<void>();

    constructor(private navService: NavService) {}

    ngOnInit() {
        this.subscribeOnOpen();
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    subscribeOnOpen() {
        this.navService.onOpen.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.isOpen = !this.isOpen;
        });
    }

}