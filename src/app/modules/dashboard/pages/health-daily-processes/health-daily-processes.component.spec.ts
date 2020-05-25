import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthDailyProcessesComponent } from './health-daily-processes.component';

describe('HealthDailyProcessesComponent', () => {
  let component: HealthDailyProcessesComponent;
  let fixture: ComponentFixture<HealthDailyProcessesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthDailyProcessesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthDailyProcessesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
