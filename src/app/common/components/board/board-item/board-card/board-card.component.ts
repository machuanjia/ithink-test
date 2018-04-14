import { Component, Input, HostBinding, HostListener } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
    selector: 'app-board-card',
    templateUrl: `./board-card.component.html`
})
export class AppBoardCardComponent {
    @Input() task: any;

    private modalRef: BsModalRef;

    constructor() {

    }
    @HostListener('click', ['$event'])
    onClick(event) {
        event.stopPropagation();
    }

    @HostListener('contextmenu', ['$event'])
    onContextmenu(event) {
        // this.popBoxService.show();
    }
}
