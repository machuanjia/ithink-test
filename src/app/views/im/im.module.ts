import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

import {ImNavComponent} from './nav/im.nav.component';
import {ImChannelComponent} from './channel/im.channel.component';
import {ImChatComponent} from './chat/im.chat.component';
import {ImGroupComponent} from './group/im.group.component';
import {ImAffairComponent} from  './affair/im.affair.component';
import {ImMessageComponent} from './message/im.message.component';
import {ImFileComponent} from './file/im.file.component';


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
        ImGroupComponent,
        ImAffairComponent,
        ImMessageComponent,
        ImFileComponent
    ]
})
export class ImModule {
}
