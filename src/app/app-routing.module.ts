import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';
import { MakeAppointmentReceptionistComponent } from './make-appointment-receptionist/make-appointment-receptionist.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcceptDeclineAppointmentComponent } from './accept-decline-appointment/accept-decline-appointment.component';

const routes: Routes = [
  {
    path: 'home', component:HomeComponent
  },
  {
    path: 'registerPatient', component:RegisterPatientComponent
  },
  {
    path: 'assign', component:RegisteremployeeComponent
  },
  {
    path: 'requestAppointment', component: MakeAppointmentReceptionistComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'acceptDeclineAppointment', component: AcceptDeclineAppointmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
