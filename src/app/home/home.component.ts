import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private db: AngularFirestore) {
   }



  ngOnInit() {
  }

  click()
  {
    console.log(this.db);

    this.db.collection('test').add({'name': 'test'});
  }
}
