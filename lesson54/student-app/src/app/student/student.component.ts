import { Component, OnInit, Input } from '@angular/core';
import { Student } from '../models/student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  @Input() student: Student;
  constructor() { }

  ngOnInit() {
   
  }

}
