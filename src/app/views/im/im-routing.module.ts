import {NgModule} from '@angular/core';
import {
    Routes,
    RouterModule
} from '@angular/router';

import {ImComponent} from './im.component';
import {ImChannelComponent} from './channel/im.channel.component';
import {ImChatComponent} from './chat/im.chat.component';
import {ImGroupComponent} from './group/im.group.component';
import {ImMessageComponent} from './message/im.message.component';
import {ImAffairComponent} from  './affair/im.affair.component';
import {ImFileComponent} from './file/im.file.component';

const routes: Routes = [
    {
        path: '',
        component: ImComponent,
        data: {
            title: 'Im'
        },
        children: [{
            path: 'channel/:id',
            component: ImChannelComponent,
            children:[{
                path:'message',
                component:ImMessageComponent
            },{
                path:'affair',
                component:ImAffairComponent
            },{
                path:'file',
                component:ImFileComponent
            }]
        }, {
            path: 'chat/:id',
            component: ImChatComponent,
            children:[{
                path:'message',
                component:ImMessageComponent
            },{
                path:'affair',
                component:ImAffairComponent
            },{
                path:'file',
                component:ImFileComponent
            }]
        }, {
            path: 'group/:id',
            component: ImGroupComponent,
            children:[{
                path:'message',
                component:ImMessageComponent
            },{
                path:'affair',
                component:ImAffairComponent
            },{
                path:'file',
                component:ImFileComponent
            }]
        }]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ImRoutingModule {
}
