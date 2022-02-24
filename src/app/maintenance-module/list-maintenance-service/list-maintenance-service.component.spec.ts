import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListMaintenanceServiceComponent } from './list-maintenance-service.component';

describe('ListMaintenanceServiceComponent', () => {
  let component: ListMaintenanceServiceComponent;
  let fixture: ComponentFixture<ListMaintenanceServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListMaintenanceServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMaintenanceServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
