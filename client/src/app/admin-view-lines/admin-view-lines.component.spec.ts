import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewLinesComponent } from './admin-view-lines.component';

describe('AdminViewLinesComponent', () => {
  let component: AdminViewLinesComponent;
  let fixture: ComponentFixture<AdminViewLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
