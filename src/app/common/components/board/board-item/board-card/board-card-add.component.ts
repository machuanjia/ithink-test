import { OnInit, Component, Input, Output, EventEmitter, HostBinding } from '@angular/core';

@Component({
    selector: 'app-board-card-add',
    templateUrl: './board-card-add.component.html'
})

export class AppBoardCardAddComponent implements OnInit {

    @Input() entry:any;

    public taskName: string;

    constructor() {

    }

    onAddTask() {
        this.entry.tasks.push({
            _id: '',
            name: this.taskName,
            description:''
        });
        this.taskName = '';
        this.entry.isAddComponentVisible = false;
    }

    onHideTaskAdd() {
        this.entry.isAddComponentVisible = false;
    }

    ngOnInit() {

    }
}
