import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbThemeModule,
  NbSidebarModule,
  NbMenuModule,
  NbLayoutModule,
  NbIconModule,
  NbButtonModule,
  NbActionsModule,
  NbDialogModule,
  NbCardModule,
  NbInputModule,
  NbDatepickerModule
} from '@nebular/theme';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { NbEvaIconsModule } from '@nebular/eva-icons';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
        }),
      ],
      forms: {},
    }),
    NbDialogModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    NbActionsModule,
    NbCardModule,
    NbInputModule
  ],
  exports: [
    NbThemeModule,
    NbSidebarModule,
    NbMenuModule,
    NbAuthModule,
    NbDialogModule,
    NbDatepickerModule,
    NbLayoutModule,
    NbEvaIconsModule,
    NbIconModule,
    NbButtonModule,
    NbActionsModule,
    NbCardModule,
    NbInputModule
  ]
})
export class AppNebularModule { }
