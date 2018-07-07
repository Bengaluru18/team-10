import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
export interface role {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-registeremployee',
  templateUrl: './registeremployee.component.html',
  styleUrls: ['./registeremployee.component.css']
})
export class RegisteremployeeComponent implements OnInit {

  constructor(private db : AngularFirestore) { }

  ngOnInit() {
  }
  roles: role[] = [
    {value: 'receptionist', viewValue: 'receptionist'},
    {value: 'admin', viewValue: 'admin'},
    {value: 'psychologist', viewValue: 'psychologist'}
  ];
  onRegister(form: NgForm)
  {
    var email = form.value.email;
    var assigned = form.value.roleassigned;
    console.log(assigned); 

    // console.log("Details");
    // console.log(name);
    // console.log(address)

    var details = {
      'email': email,
      'role': assigned
    }

    console.log(details);
    setTimeout(()=>{},3000);

    this.db.collection('Employee').add(details);
  }
}



/**
 * @title Basic select
 */
