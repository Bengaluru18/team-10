import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { temp } from '../models/temp';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  myArray = [];

    another : any;

  constructor(private db : AngularFirestore) { }

  ngOnInit() {
    // this.another = this.db.collection<temp>('temp').valueChanges();
    this.db.collection<temp>('temp').valueChanges().subscribe(docs => {
      this.myArray = [];
      docs.forEach(doc => {
        this.myArray.push(doc);
        console.log(doc)
      });
    })

  }

  onclick()
  {
    this.db.collection<temp>('temp').valueChanges().subscribe(docs => {
      this.myArray = [];
      docs.forEach(doc => {
        this.myArray.push(doc);
        console.log(doc)
      });
    })
  }

}
