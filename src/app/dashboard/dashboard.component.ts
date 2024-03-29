import { Component, OnInit, ViewChild } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { appointment } from '../models/temp';
import { MatTableDataSource } from '@angular/material';
import { MatSort} from  '@angular/material';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  myArray = [];
  myArrayScheduled = [];
  myArrayDeclined=[];

    another : any;
  dataSource : MatTableDataSource<any>;
  @ViewChild(MatSort) sort : MatSort;
  displayedColumns = ['beneficiary'];

  constructor(private db : AngularFirestore) { }

  ngOnInit() {
    // this.another = this.db.collection<temp>('temp').valueChanges();
    this.db.collection<appointment>('Appointments').valueChanges().subscribe(docs => {
      this.myArray = [];
      this.dataSource = new MatTableDataSource(docs);
      docs.forEach(doc => {
        this.myArray.push(doc);
        console.log(doc)
      });
    });

    this.db.collection('ScheduledAppointments').valueChanges().subscribe(sdocs => {
      this.myArrayScheduled=[];
      sdocs.forEach(sdoc => {
        this.myArrayScheduled.push(sdoc);
      })
    });

    this.db.collection('DeclinedAppointments').valueChanges().subscribe(ddocs => {
      this.myArrayDeclined=[];
      ddocs.forEach(ddoc => {
        this.myArrayDeclined.push(ddoc);
      })
    });



  }

  onclick()
  {
    this.db.collection<appointment>('temp').valueChanges().subscribe(docs => {
      this.myArray = [];
      docs.forEach(doc => {
        this.myArray.push(doc);
        console.log(doc)
      });
    })
  }

}
