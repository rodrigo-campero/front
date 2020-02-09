import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NbMenuModule } from '@nebular/theme';


@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    NbMenuModule
  ],
  exports: [
    NotFoundComponent
  ]
})
export class SharedModule { }
