import { Component, OnDestroy, OnInit } from "@angular/core";
import { NavService } from "../../services/nav.service";
import { Subject, takeUntil } from "rxjs";

@Component ({
    selector: 'app-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss']

})
export class NavComponent implements OnInit, OnDestroy{

    isOpen: boolean = true;

    destroy$= new Subject<void>();

    constructor (private navService: NavService) {}

    ngOnInit() {
        this.suscribeOnOpen();
    }

    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }

    suscribeOnOpen() {
        this.navService.onOpen.pipe(takeUntil(this.destroy$)).subscribe(() => {
            this.isOpen = !this.isOpen

        })
    }


}