import { Component, OnInit, ElementRef } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { appointment } from '../models/temp';
import { Router } from '@angular/router';

import { element } from 'protractor';

declare var $: any;

@Component({
  selector: 'app-accept-decline-appointment',
  templateUrl: './accept-decline-appointment.component.html',
  styleUrls: ['./accept-decline-appointment.component.css']
})
export class AcceptDeclineAppointmentComponent implements OnInit {

  time: String;

  constructor(private db: AngularFirestore, private element: ElementRef, private router : Router) { }

  myArray = [];
  appointment :any;

  ngOnInit() {

    // console.log(this.element.nativeElement.querySelector('#timeform').innerHTML;

    this.db.collection<appointment>('Appointments').valueChanges().subscribe(docs => {
      docs.forEach(doc => {
        this.myArray.push(doc);
      })
    })

  }

  approveAppointment(appt) {
    // console.log(this.element.nativeElement.querySelector('#timeform').innerHTML());
    this.appointment = appt;
    $('.ui.modal').modal('show');
  }
  scheduleAppointment()
  {
    this.appointment.time = this.time;
    this.db.collection('ScheduledAppointments').add(this.appointment);
    this.db.collection('Appointments').doc(this.appointment.id).delete().then(function() {
      console.log("Deleted");
    }).catch(function(error){
      console.log("Error deleting");
    });

    this.router.navigate(["acceptDeclineAppointment"]);
  }

}
