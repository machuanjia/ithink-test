import { Component, Input, HostBinding,ElementRef, TemplateRef } from '@angular/core';

@Component({
    selector: 'app-board-item-header',
    templateUrl: './board-item-header.component.html'
})
export class AppBoardItemHeaderComponent {

    @HostBinding('class.thy-entry-header') entryItemHeaderClass = true;

    @Input() entry: any;

    constructor() {

    }

    openEntityMenu(templateRef: any) {
        
    }
}


