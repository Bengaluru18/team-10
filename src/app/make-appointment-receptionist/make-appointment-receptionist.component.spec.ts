import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAppointmentReceptionistComponent } from './make-appointment-receptionist.component';

describe('MakeAppointmentReceptionistComponent', () => {
  let component: MakeAppointmentReceptionistComponent;
  let fixture: ComponentFixture<MakeAppointmentReceptionistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeAppointmentReceptionistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeAppointmentReceptionistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
