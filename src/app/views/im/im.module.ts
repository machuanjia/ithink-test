import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ImComponent } from './im.component';
import { ImRoutingModule } from './im-routing.module';

@NgModule({
  imports: [
    FormsModule,
    ImRoutingModule
  ],
  declarations: [ ImComponent ]
})
export class ImModule { }
