import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,Params,Router} from '@angular/router';

@Component({
    selector: 'im-channel',
    templateUrl: 'im.channel.component.html'
})
export class ImChannelComponent implements OnInit {

    constructor(private router:Router, private activatedRoute:ActivatedRoute){}

    ngOnInit(): void {
        this.activatedRoute.params.subscribe((params:Params)=>{
            this.router.navigate(['message'],{relativeTo:this.activatedRoute});
        });
    }

}
