import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';


@Component({
  selector: 'app-register-patient',
  templateUrl: './register-patient.component.html',
  styleUrls: ['./register-patient.component.css']
})
export class RegisterPatientComponent implements OnInit {

  constructor(private db : AngularFirestore) { }

  ngOnInit() {
  }

  onLogin(form: NgForm)
  {
    var name = form.value.name;
    var age = form.value.age;
    var address = form.value.address;
    var parentname = form.value.parentname;
    var phone = form.value.phone;

    // console.log("Details");
    // console.log(name);
    // console.log(address)

    var details = {
      'name': name,
      'age': age,
      'address' : address,
      'parentname' : parentname,
      'phone' : phone

    }

    this.db.collection('patients').add(details);
  }

}
