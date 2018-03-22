import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'aside-nav',
    templateUrl: './aside-nav.component.html'
})
export class AsideNavComponent implements OnInit{

    @Input() navigation: any;

    constructor() {

    }

    ngOnInit(){
        console.log(this.navigation)
    }
}
