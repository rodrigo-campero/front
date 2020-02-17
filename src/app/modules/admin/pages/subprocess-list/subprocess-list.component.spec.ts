import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubprocessListComponent } from './subprocess-list.component';

describe('SubprocessListComponent', () => {
  let component: SubprocessListComponent;
  let fixture: ComponentFixture<SubprocessListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubprocessListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubprocessListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
