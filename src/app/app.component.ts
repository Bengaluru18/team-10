import { Component } from '@angular/core';
import { AuthService } from './auth.service';
// import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  email: string;
  password: string;

  constructor() {}

  // signup() {
  //   this.authService.signup(this.email, this.password);
  //   this.email = this.password = '';
  // }

  // login() {
  //   this.authService.login(this.email, this.password);
  //   this.email = this.password = '';    
  // }

  // logout() {
  //   this.authService.logout();
  // }
}
