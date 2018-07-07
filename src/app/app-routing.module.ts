import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';
import { MakeAppointmentReceptionistComponent } from './make-appointment-receptionist/make-appointment-receptionist.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  {
    path: 'home', component:HomeComponent
  },
  {
    path: 'register', component:RegisterPatientComponent
  },
  {
    path: 'assign', component:RegisteremployeeComponent
  },
  {
    path: 'requestAppointment', component: MakeAppointmentReceptionistComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
