import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {ImNavComponent} from './nav/im.nav.component';
import {ImChannelComponent} from './channel/im.channel.component';
import {ImChatComponent} from './chat/im.chat.component';
import {ImGroupComponent} from './group/im.group.component';

import {ImComponent} from './im.component';
import {ImRoutingModule} from './im-routing.module';

@NgModule({
    imports: [
        FormsModule,
        ImRoutingModule
    ],
    declarations: [
        ImComponent,
        ImNavComponent,
        ImChannelComponent,
        ImChatComponent,
        ImGroupComponent
    ]
})
export class ImModule {
}
