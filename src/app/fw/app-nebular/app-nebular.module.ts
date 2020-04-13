import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbActionsModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbMenuModule, NbSidebarModule, NbThemeModule } from '@nebular/theme';
// forRoot: module has service, add in all app

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbLayoutModule,
    NbThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDialogModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    NbActionsModule,
    NbCardModule,
    NbInputModule,
    NbCheckboxModule
  ],
  exports: [
    NbLayoutModule,
    NbThemeModule,
    NbSidebarModule,
    NbMenuModule,
    NbDialogModule,
    NbDatepickerModule,
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    NbActionsModule,
    NbCardModule,
    NbInputModule,
    NbCheckboxModule
  ]
})
export class AppNebularModule { }
