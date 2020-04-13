import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BotAddEditComponent } from './pages/bot-add-edit/bot-add-edit.component';
import { BotListComponent } from './pages/bot-list/bot-list.component';
import { ParameterAddEditComponent } from './pages/parameter-add-edit/parameter-add-edit.component';
import { ParameterListComponent } from './pages/parameter-list/parameter-list.component';
import { ProcessAddEditComponent } from './pages/process-add-edit/process-add-edit.component';
import { ProcessListComponent } from './pages/process-list/process-list.component';
import { SchedulerAddEditComponent } from './pages/scheduler-add-edit/scheduler-add-edit.component';
import { SchedulerListComponent } from './pages/scheduler-list/scheduler-list.component';
import { SubprocessAddEditComponent } from './pages/subprocess-add-edit/subprocess-add-edit.component';
import { SubprocessListComponent } from './pages/subprocess-list/subprocess-list.component';

@NgModule({
  declarations: [
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    ParameterListComponent,
    ParameterAddEditComponent,
    SchedulerListComponent,
    SchedulerAddEditComponent,
    ProcessAddEditComponent,
    ProcessListComponent,
    BotListComponent,
    BotAddEditComponent,
    SubprocessListComponent,
    SubprocessAddEditComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule
  ]
})
export class AdminModule { }
