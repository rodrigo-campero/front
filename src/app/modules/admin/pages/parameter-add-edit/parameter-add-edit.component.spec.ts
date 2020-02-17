import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParameterAddEditComponent } from './parameter-add-edit.component';

describe('ParameterAddEditComponent', () => {
  let component: ParameterAddEditComponent;
  let fixture: ComponentFixture<ParameterAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParameterAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParameterAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
