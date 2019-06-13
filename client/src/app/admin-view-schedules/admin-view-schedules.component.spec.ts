import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewSchedulesComponent } from './admin-view-schedules.component';

describe('AdminViewSchedulesComponent', () => {
  let component: AdminViewSchedulesComponent;
  let fixture: ComponentFixture<AdminViewSchedulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewSchedulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewSchedulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
