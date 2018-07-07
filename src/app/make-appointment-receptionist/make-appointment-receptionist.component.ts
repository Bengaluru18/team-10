import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-make-appointment-receptionist',
  templateUrl: './make-appointment-receptionist.component.html',
  styleUrls: ['./make-appointment-receptionist.component.css']
})
export class MakeAppointmentReceptionistComponent implements OnInit {

  patientname: String;
  department : String;

  constructor(private db : AngularFirestore) { }

  ngOnInit() {
  }

  makeAppReceptionist(){

    // const pname = form.value.patientname;
    // console.log(pname);
    // const dept = form.value.department;

    var details = {
      'beneficiary' :  this.patientname,
      'department' : this.department
    }

    this.db.collection('Appointments').add(details);

  }

}
