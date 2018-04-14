import { Component, HostBinding, OnInit } from '@angular/core';
import { SortablejsOptions } from 'angular-sortablejs/dist';

@Component({
    selector: 'app-board-items',
    templateUrl: './board-items.component.html'
})

export class AppBoardItemsComponent implements OnInit {

    @HostBinding('class.thy-board-wrapper') taskBoardClass = true;

    public entries = [];

    public entriesDraggableOptions: SortablejsOptions;

    constructor() {

    }

    entryAdd(data) {
        const _index = this.entries[this.entries.length - 1]._id + 1;
        this.entries.push({
            _id: _index,
            name: data.name || '列表',
            tasks: []
        });
    }

    ngOnInit() {
        this.entriesDraggableOptions = {
            handle: '.thy-entry-header',
            filter: '.ignore-elements',
            draggable: '.thy-entry-wrapper',
            ghostClass: 'sortable-ghost',
            dragClass: 'sortable-drag',
            sort: true,
            forceFallback: true,
            onUpdate: (evt) => {
                console.log(evt);
            }
        };
        for (let i = 1; i < 10; i++) {
            const _tasks = [];
            for (let t = 1; t < 10; t++) {
                _tasks.push({
                    _id: i + ' - ' + t,
                    name: '任务' + i + '-' + t
                });
            }
            this.entries.push({
                _id: i,
                name: '列表' + i,
                tasks: _tasks
            });
        }
    }
}
