import { Component, HostListener, OnInit, ViewChild } from '@angular/core';
import { FullCalendarComponent } from '@fullcalendar/angular';
import { EventInput } from '@fullcalendar/core';
import { ButtonTextCompoundInput, ToolbarInput } from '@fullcalendar/core/types/input-types';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction'; // for dateClick
import listPlugin from '@fullcalendar/list';
import timeGrigPlugin from '@fullcalendar/timegrid';
import timeLinePlugin from '@fullcalendar/timeline';
import { NbDialogService } from '@nebular/theme';
import { AddEditEventCalendarComponent } from '../../components/add-edit-event-calendar/add-edit-event-calendar.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {

  constructor(private dialogService: NbDialogService) { }

  @ViewChild(FullCalendarComponent, { static: false }) calendarComponent: FullCalendarComponent; // the #calendar in the template
  // @ViewChild('calendar', { static: false }) divRef;

  calendarVisible = true;
  calendarPlugins = [interactionPlugin, dayGridPlugin, timeGrigPlugin, listPlugin, timeLinePlugin];
  calendarWeekends = true;
  calendarEvents: EventInput[] = [
    { title: 'All Day Event', start: '2020-02-01' },
    { title: 'Long Event', start: '2020-02-07', end: '2020-02-10' },
    { groupId: '999', title: 'Repeating Event', start: '2020-02-09T16:00:00+00:00' }, { groupId: '999', title: 'Repeating Event', start: '2020-02-16T16:00:00+00:00' }, { title: 'Conference', start: '2020-02-09', end: '2020-02-11' }, { title: 'Meeting', start: '2020-02-10T10:30:00+00:00', end: '2020-02-10T12:30:00+00:00' }, { title: 'Lunch', start: '2020-02-10T12:00:00+00:00' }, { title: 'Birthday Party', start: '2020-02-11T07:00:00+00:00' }, { url: 'http:\/\/google.com\/', title: 'Click for Google', start: '2020-02-28' }, { title: 'Meeting', start: '2020-02-10T14:30:00+00:00' }, { title: 'Happy Hour', start: '2020-02-10T17:30:00+00:00' }, { title: 'Dinner', start: '2020-02-10T20:00:00+00:00' }];
  calendarViews: {
    timeGrid: {
      eventLimit: 6 // adjust to 6 only for timeGridWeek/timeGridDay
    }
  };
  calendarHeader: ToolbarInput = {
    left: 'prev,next,today',
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

  public innerWidth: any;
  height: number;
  aspectRatio = 0.82;
  defaultView = 'dayGridMonth';

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

  open(arg) {
    this.dialogService.open(AddEditEventCalendarComponent,
      {
        context: {
          start: arg.date
        }
      }).onClose.subscribe(res => {
        if (res) {
          this.calendarEvents = this.calendarEvents.concat({
            title: res.title,
            start: res.start,
            end: res.end,
            allDay: arg.allDay
          });
        }
      });
  }

  handleDateClick(arg) {
    this.open(arg);
  }

  eventClick(arg) {
    console.log(arg);
  }
  ngOnInit() {
    this.innerWidth = window.innerWidth;
    this.height = this.aspectRatio * window.innerHeight;
    this.check();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.check();
  }

  check() {
    if (this.innerWidth < 768) {
      this.calendarButtonText = {
        today: 'Hoje',
        month: 'Mês',
        week: 'Semana',
        day: 'Dia',
        list: 'Compromissos'
      };
      this.calendarHeader = {
        left: 'prev,next',
        center: 'title',
        right: 'dayGridMonth,timeGridDay,listWeek'
      };
      this.defaultView = 'timeGridDay';
    } else {
      this.calendarButtonText = {
        today: 'Hoje',
        month: 'Mês',
        week: 'Semana',
        day: 'Dia',
        list: 'Compromissos'
      };
      this.calendarHeader = {
        left: 'prev,next,today',
        center: 'title',
        right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      };
      this.defaultView = 'dayGridMonth';
    }
  }

  // openFullscreen() {
  //   // Use this.divRef.nativeElement here to request fullscreen
  //   const elem = this.divRef.nativeElement;

  //   if (elem.requestFullscreen) {
  //     elem.requestFullscreen();
  //   } else if (elem.msRequestFullscreen) {
  //     elem.msRequestFullscreen();
  //   } else if (elem.mozRequestFullScreen) {
  //     elem.mozRequestFullScreen();
  //   } else if (elem.webkitRequestFullscreen) {
  //     elem.webkitRequestFullscreen();
  //   }
  //   this.calendarComponent.getApi().render();
  // }
}
