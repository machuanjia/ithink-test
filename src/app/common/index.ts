import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AsideNavComponent } from './components';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        AsideNavComponent
    ],
    exports:[
        AsideNavComponent
    ]
})
export class CommonComponentModule {
}
