import { NgModule } from '@angular/core';
import { Routes,
     RouterModule } from '@angular/router';

import { ImComponent } from './im.component';

const routes: Routes = [
  {
    path: '',
    component: ImComponent,
    data: {
      title: 'Im'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ImRoutingModule {}
