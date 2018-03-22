import { Component, OnInit } from '@angular/core';
import {
    Router,
    ActivatedRoute
} from '@angular/router';

import { channelNavigation,groupNavigation,chatNavigation } from './_im.nav';

@Component({
    selector: 'im-nav',
    templateUrl: 'im.nav.component.html'
})
export class ImNavComponent implements OnInit {

    public channelNavigation = channelNavigation;
    public groupNavigation = groupNavigation;
    public chatNavigation = chatNavigation;

    constructor(private router:Router,private activeRoute:ActivatedRoute){

    }

    ngOnInit(): void {
        this.router.navigate(['/im/channel',123],{relativeTo:this.activeRoute});
    }

}
