import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppNebularModule } from 'src/app/fw/app-nebular/app-nebular.module';
import { FullCalendarModule } from '@fullcalendar/angular';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { CalendarComponent } from './pages/calendar/calendar.component';
import { AddEditEventCalendarComponent } from './components/add-edit-event-calendar/add-edit-event-calendar.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, DashboardComponent, HeaderComponent, FooterComponent, SidebarComponent, CalendarComponent, AddEditEventCalendarComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    AppNebularModule,
    FullCalendarModule,
    DashboardRoutingModule,
  ],
  entryComponents: [AddEditEventCalendarComponent]
})
export class DashboardModule { }
