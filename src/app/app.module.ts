import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import { MatFormFieldModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule } from '@angular/material'
// import { LoginComponent } from './login/login.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
// import { FormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material';
// import { MatFormFieldModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardComponent } from './dashboard/dashboard.component';
// // import { AppComponent } from './app.component';
// import { PostCreateComponent } from './posts/post-create/post-create.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// import { HeaderComponent } from './header/header.component';
// import { PostListComponent } from './post-list/post-list.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    // LoginComponent,
    RegisterPatientComponent,
    DashboardComponent
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
    MatFormFieldModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
