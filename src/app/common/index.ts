import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AsideNavComponent } from './components';

@NgModule({
    imports: [
        FormsModule
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
