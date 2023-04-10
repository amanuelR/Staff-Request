import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffRequestTableComponent } from './staff-request-table.component';

describe('StaffRequestTableComponent', () => {
  let component: StaffRequestTableComponent;
  let fixture: ComponentFixture<StaffRequestTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffRequestTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaffRequestTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
