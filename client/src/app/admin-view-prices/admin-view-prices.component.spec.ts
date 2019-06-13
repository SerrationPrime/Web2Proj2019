import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminViewPricesComponent } from './admin-view-prices.component';

describe('AdminViewPricesComponent', () => {
  let component: AdminViewPricesComponent;
  let fixture: ComponentFixture<AdminViewPricesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminViewPricesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminViewPricesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
