import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentMaintenanceComponent } from './parent-maintenance.component';

describe('ParentMaintenanceComponent', () => {
  let component: ParentMaintenanceComponent;
  let fixture: ComponentFixture<ParentMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParentMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
