import { Component, OnInit, HostBinding, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'app-board-item-add',
    templateUrl: './board-item-add.component.html'
})

export class AppBoardItemAddComponent implements OnInit {

    @HostBinding('class.thy-entry-wrapper') entryItemAddClass = true;

    @Output() entryAdd: EventEmitter<any> = new EventEmitter<any>();

    public isEntryContent: Boolean = false;

    public entryName: string;

    constructor() {

    }

    toggleEntryContent() {
        this.isEntryContent = !this.isEntryContent;
    }

    addEntryItem() {
        this.entryAdd.emit({
            name: this.entryName
        });
        this.entryName = '';
        this.isEntryContent = false;
    }

    ngOnInit() {

    }
}
