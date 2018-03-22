import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import {ImNavComponent} from './nav/im.nav.component';
import {ImChannelComponent} from './channel/im.channel.component';
import {ImChatComponent} from './chat/im.chat.component';
import {ImGroupComponent} from './group/im.group.component';

import {ImComponent} from './im.component';
import {ImRoutingModule} from './im-routing.module';

import {CommonComponentModule} from './../../common';

@NgModule({
    imports: [
        FormsModule,
        ImRoutingModule,
        CommonModule,
        CommonComponentModule
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
