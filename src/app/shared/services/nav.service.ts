import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class NavService {
    onOpen: Subject<void> = new Subject<void>();
}