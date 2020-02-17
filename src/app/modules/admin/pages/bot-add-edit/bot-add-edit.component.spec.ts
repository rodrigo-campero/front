import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BotAddEditComponent } from './bot-add-edit.component';

describe('BotAddEditComponent', () => {
  let component: BotAddEditComponent;
  let fixture: ComponentFixture<BotAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BotAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BotAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
