import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewStationsComponent } from './admin-view-stations.component';

describe('AdminViewStationsComponent', () => {
  let component: AdminViewStationsComponent;
  let fixture: ComponentFixture<AdminViewStationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewStationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewStationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
