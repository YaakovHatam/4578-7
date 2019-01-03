import { Component } from '@angular/core';
import { Student } from './models/student.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'student-app';
  itemsOfMenu = [
    'Home',
    'About',
    'Contact'
  ];

  students:Student[] = [
    {
      id: 1,
      name: 'student 1'
    },
    {
      id: 2,
      name: 'student2'
    },
    {
      id: 3,
      name: 'student3'
    },
    {
      id: 3,
      name: 'student3'
    },
    {
      id: 3,
      name: 'student3'
    },
    {
      id: 3,
      name: 'student3'
    },
    {
      id: 3,
      name: 'student3'
    },
    {
      id: 3,
      name: 'student3'
    },
    {
      id: 3,
      name: 'student3'
    },
    {
      id: 23,
      name: 'student23'
    },
    {
      id: 3,
      name: 'student3'
    },
    {
      id: 3,
      name: 'student3'
    }
  ]
}
