import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {environment} from '../environments/environment';
import {AngularFirestore, AngularFirestoreModule} from 'angularfire2/firestore';
import { RegisterPatientComponent } from './register-patient/register-patient.component';
import { FormsModule } from '@angular/forms';
import { MatInputModule} from '@angular/material';
import { MatFormFieldModule,MatCardModule,MatButtonModule,MatToolbarModule,MatExpansionModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// // import { AppComponent } from './app.component';
// import { PostCreateComponent } from './posts/post-create/post-create.component';
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
// import { HeaderComponent } from './header/header.component';
// import { PostListComponent } from './post-list/post-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterPatientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFirestoreModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatExpansionModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  // providers: [AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
