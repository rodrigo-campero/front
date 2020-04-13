import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppNebularModule } from '../fw/app-nebular/app-nebular.module';
import { NebularValidationCssDirectiveDirective } from './directives/nebular-validation-css-directive.directive';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  declarations: [
    NotFoundComponent,
    NebularValidationCssDirectiveDirective
  ],
  imports: [
    CommonModule,
    SharedRoutingModule,
    AppNebularModule,
    ReactiveFormsModule
  ],
  exports: [
    AppNebularModule,
    ReactiveFormsModule,
    NotFoundComponent,
    NebularValidationCssDirectiveDirective
  ]
})
export class SharedModule { }
