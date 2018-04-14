import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AppComponents,AppEntryComponents} from './components';
import { SortablejsModule } from 'angular-sortablejs/dist';
import {
  TranslateModule, TranslateService, TranslateDirective,
  TranslatePipe
} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    SortablejsModule.forRoot({ animation: 150 }),
    TranslateModule.forRoot()
  ],
  declarations: [
    ...AppComponents,
    ...AppEntryComponents
  ],
  exports: [
    SortablejsModule,
    ...AppComponents,
    ...AppEntryComponents,
    TranslateModule
  ]
})
export class CommonComponentModule {
}
