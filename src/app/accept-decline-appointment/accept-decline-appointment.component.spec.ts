import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcceptDeclineAppointmentComponent } from './accept-decline-appointment.component';

describe('AcceptDeclineAppointmentComponent', () => {
  let component: AcceptDeclineAppointmentComponent;
  let fixture: ComponentFixture<AcceptDeclineAppointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcceptDeclineAppointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcceptDeclineAppointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
