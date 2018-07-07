import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';

const routes: Routes = [
  {
    path: 'home', component:HomeComponent
  },
  {
    path: 'register', component:RegisterPatientComponent
  },
  {
    path: 'assign', component:RegisteremployeeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
