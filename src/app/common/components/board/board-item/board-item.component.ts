import { Component, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'app-board-item',
    templateUrl: './board-item.component.html'
})
export class AppBoardItemComponent {

    @HostBinding('class.thy-entry') entryItemClass = true;

    @Input() entry: any;

    constructor() {
    }
}
