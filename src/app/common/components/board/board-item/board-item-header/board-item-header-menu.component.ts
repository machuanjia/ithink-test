import { OnInit, Component } from '@angular/core';

@Component({
    selector: 'app-board-item-header-action',
    templateUrl:'./app-item-header-menu.component.html'
})
export class AppBoardItemHeaderMenuComponent implements OnInit {

    title: string;

    constructor() {
    }

    ngOnInit() {
        console.log(this.title);
    }

    itemClick(value) {
        console.log(value);
    }
}
