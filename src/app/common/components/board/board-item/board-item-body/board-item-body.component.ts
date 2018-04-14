import { Component, Input, HostBinding, EventEmitter, Output, OnInit } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs/dist';

@Component({
    selector: 'app-board-item-body',
    templateUrl: './board-item-body.component.html'
})
export class AppBoardItemBodyComponent implements OnInit {

    @HostBinding('class.thy-entry-body') entryItemBodyClass = true;

    @Input() entry: any;

    public cardDraggableOptions: SortablejsOptions;

    constructor() {
    }

    ngOnInit() {
        this.cardDraggableOptions = {
            group: {
                name: 'card'
            },
            sort: true,
            forceFallback: true,
            fallbackClass: 'sortable-fallback',
            draggable: '.thy-card-container',
            ghostClass: 'sortable-ghost',
            dragClass: 'sortable-drag',
            onStart: (evt) => {
            },
            onAdd: (evt) => {
            },
            onUpdate: (evt) => {
            }
        };
    }
}
