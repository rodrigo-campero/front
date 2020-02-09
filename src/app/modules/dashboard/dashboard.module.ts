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


@NgModule({
  declarations: [HomeComponent, DashboardComponent, HeaderComponent, FooterComponent, SidebarComponent, CalendarComponent],
  imports: [
    CommonModule,
    FullCalendarModule,
    DashboardRoutingModule,
    AppNebularModule
  ]
})
export class DashboardModule { }
