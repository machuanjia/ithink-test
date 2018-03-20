import {NgModule} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import {ImComponent} from './im.component';
import {ImChannelComponent} from './channel/im.channel.component';
import {ImChatComponent} from './chat/im.chat.component';
import {ImGroupComponent} from './group/im.group.component';

const routes: Routes = [
    {
        path: '',
        component: ImComponent,
        data: {
            title: 'Im'
        },
        children: [{
            path: 'channel/:id',
            component: ImChannelComponent
        }, {
            path: 'chat/:id',
            component: ImChatComponent
        }, {
            path: 'group/:id',
            component: ImGroupComponent
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImRoutingModule {
}
