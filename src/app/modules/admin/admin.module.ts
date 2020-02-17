import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ParameterListComponent } from './pages/parameter-list/parameter-list.component';
import { ParameterAddEditComponent } from './pages/parameter-add-edit/parameter-add-edit.component';
import { SchedulerListComponent } from './pages/scheduler-list/scheduler-list.component';
import { SchedulerAddEditComponent } from './pages/scheduler-add-edit/scheduler-add-edit.component';
import { ProcessAddEditComponent } from './pages/process-add-edit/process-add-edit.component';
import { ProcessListComponent } from './pages/process-list/process-list.component';
import { BotListComponent } from './pages/bot-list/bot-list.component';
import { BotAddEditComponent } from './pages/bot-add-edit/bot-add-edit.component';
import { SubprocessListComponent } from './pages/subprocess-list/subprocess-list.component';
import { SubprocessAddEditComponent } from './pages/subprocess-add-edit/subprocess-add-edit.component';
import { AdminComponent } from './admin.component';
import { AppNebularModule } from 'src/app/fw/app-nebular/app-nebular.module';


@NgModule({
  declarations: [ParameterListComponent, ParameterAddEditComponent, SchedulerListComponent, SchedulerAddEditComponent, ProcessAddEditComponent, ProcessListComponent, BotListComponent, BotAddEditComponent, SubprocessListComponent, SubprocessAddEditComponent, AdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    AppNebularModule
  ]
})
export class AdminModule { }
