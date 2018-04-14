import { Component, Input, HostBinding } from '@angular/core';

@Component({
    selector: 'app-board-item-footer',
    templateUrl: './board-item-footer.component.html'
})
export class AppBoardItemFooterComponent {

    @HostBinding('class.thy-entry-footer') entryItemFooterClass = true;

    @Input() entry: any;

    constructor() {
    }

    onShowCardAdd() {
        this.entry.isAddComponentVisible = true;
    }
}
