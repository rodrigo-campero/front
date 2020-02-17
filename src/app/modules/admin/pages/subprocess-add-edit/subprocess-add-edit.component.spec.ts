import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubprocessAddEditComponent } from './subprocess-add-edit.component';

describe('SubprocessAddEditComponent', () => {
  let component: SubprocessAddEditComponent;
  let fixture: ComponentFixture<SubprocessAddEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubprocessAddEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubprocessAddEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
