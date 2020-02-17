import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessAddEditComponent } from './process-add-edit.component';

describe('ProcessAddEditComponent', () => {
  let component: ProcessAddEditComponent;
  let fixture: ComponentFixture<ProcessAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcessAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
