import { Component, OnInit } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title: string;
  menuItems: string[];
  show: boolean;
  hclass: string;
  colorClass: string[];
  students: Student[];

  constructor() { }

  ngOnInit() {
    this.colorClass = [
      'blue',
      'red',
      'brown'
    ];
    this.hclass = this.colorClass[0];
    this.show = true;
    this.title = 'i am title';
    this.menuItems = [
      'Home',
      'About',
      'Contact'
    ];

    this.students = [
      {
        id: 1,
        name: 'student 1'
      },
      {
        id: 2,
        name: 'student 2'
      },
      {
        id: 3,
        name: 'student 2'
      }
    ]
  }

  clicked() {
    this.hclass = this.colorClass[Math.floor(Math.random()*3)];
  }

}
