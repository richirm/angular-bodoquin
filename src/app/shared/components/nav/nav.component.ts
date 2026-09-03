import { Component, OnDestroy, OnInit } from "@angular/core"
import { NavService } from "../../services/nav.service";
import { Subject, takeUntil } from "rxjs";

@Component({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit, OnDestroy{

    isOpen: boolean = false;

    destroy$= new Subject<void>();

    constructor(private navService: NavService) {}

    ngOnInit() {
        this.subcribeOnOpen();
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    subcribeOnOpen() {
        this.navService.onOpen.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.isOpen = !this.isOpen;
        });
    }
 
}