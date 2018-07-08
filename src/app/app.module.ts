
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import { MatFormFieldModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule,MatSelectModule } from '@angular/material'
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { FormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material';
// import { MatFormFieldModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisteremployeeComponent } from './registeremployee/registeremployee.component';
// import { MakeAppointmentComponent } from './make-appointment/make-appointment.component';
import { MakeAppointmentReceptionistComponent } from './make-appointment-receptionist/make-appointment-receptionist.component';
import { LoginComponent } from './login/login.component';
//import { ServiceWorkerModule } from '@angular/service-worker';
// // import { AppComponent } from './app.component';
// import { PostCreateComponent } from './posts/post-create/post-create.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// import { HeaderComponent } from './header/header.component';
// import { PostListComponent } from './post-list/post-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AcceptDeclineAppointmentComponent } from './accept-decline-appointment/accept-decline-appointment.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterPatientComponent,
    RegisteremployeeComponent,
    DashboardComponent,
    LoginComponent,

    // MakeAppointmentComponent,
    MakeAppointmentReceptionistComponent,

    AcceptDeclineAppointmentComponent,

    LoginComponent
  ],
  imports: [
   BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    FormsModule,MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatFormFieldModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule,MatSelectModule,
    AngularFireModule.initializeApp(environment.firebase)
    //ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  // providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
