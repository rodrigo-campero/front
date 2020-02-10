import { Component, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGrigPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import { ToolbarInput, ButtonTextCompoundInput } from '@fullcalendar/core/types/input-types';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  @ViewChild('calendar', { static: false }) calendarComponent: FullCalendarComponent; // the #calendar in the template

  calendarVisible = true;
  calendarPlugins = [dayGridPlugin, timeGrigPlugin, interactionPlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    { "title": "All Day Event", "start": "2020-02-01" },
    { "title": "Long Event", "start": "2020-02-07", "end": "2020-02-10" },
    { "groupId": "999", "title": "Repeating Event", "start": "2020-02-09T16:00:00+00:00" }, { "groupId": "999", "title": "Repeating Event", "start": "2020-02-16T16:00:00+00:00" }, { "title": "Conference", "start": "2020-02-09", "end": "2020-02-11" }, { "title": "Meeting", "start": "2020-02-10T10:30:00+00:00", "end": "2020-02-10T12:30:00+00:00" }, { "title": "Lunch", "start": "2020-02-10T12:00:00+00:00" }, { "title": "Birthday Party", "start": "2020-02-11T07:00:00+00:00" }, { "url": "http:\/\/google.com\/", "title": "Click for Google", "start": "2020-02-28" }, { "title": "Meeting", "start": "2020-02-10T14:30:00+00:00" }, { "title": "Happy Hour", "start": "2020-02-10T17:30:00+00:00" }, { "title": "Dinner", "start": "2020-02-10T20:00:00+00:00" }];
  calendarViews: {
    timeGrid: {
      eventLimit: 6 // adjust to 6 only for timeGridWeek/timeGridDay
    }
  };
  calendarHeader: ToolbarInput = {
    left: 'prev,next today',
    center: 'title',
    right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
  };
  calendarButtonText: ButtonTextCompoundInput = {
    prev: 'Anterior',
    next: 'Próximo',
    today: 'Hoje',
    month: 'Mês',
    week: 'Semana',
    day: 'Dia',
    list: 'Compromissos'
  };

  toggleVisible() {
    this.calendarVisible = !this.calendarVisible;
  }

  toggleWeekends() {
    this.calendarWeekends = !this.calendarWeekends;
  }

  gotoPast() {
    const calendarApi = this.calendarComponent.getApi();
    calendarApi.gotoDate('2000-01-01');
  }

  handleDateClick(arg) {
    if (confirm('Would you like to add an event to ' + arg.dateStr + ' ?')) {
      this.calendarEvents = this.calendarEvents.concat({
        title: 'New Event',
        start: arg.date,
        allDay: arg.allDay
      });
    }
  }

  eventClick(arg) {
    console.log(arg);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
