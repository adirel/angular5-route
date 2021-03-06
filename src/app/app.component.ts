import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  courses: any[];
  titleStyle = {
    'color' : 'lightblue',
    'font-size' : '4em',
    'text-align': 'center'
  };
  constructor(db: AngularFireDatabase) {
    // reading list of objects
    db.list('/courses/')
    .valueChanges()
    .subscribe(courses => {
      this.courses = courses;
      console.log(JSON.stringify( courses));
      console.log( courses );
    });
  }
}
