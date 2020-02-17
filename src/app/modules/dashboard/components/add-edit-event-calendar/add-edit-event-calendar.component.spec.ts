import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditEventCalendarComponent } from './add-edit-event-calendar.component';

describe('AddEditEventCalendarComponent', () => {
  let component: AddEditEventCalendarComponent;
  let fixture: ComponentFixture<AddEditEventCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEditEventCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditEventCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
