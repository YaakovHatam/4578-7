import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/models/student.model';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  student: Student;
  constructor(private activatedRoute: ActivatedRoute, private angularFirestore: AngularFirestore) { }

  ngOnInit() {
    
    this.activatedRoute.params.subscribe(paramsRes => {
      const id = paramsRes.id;
      this.angularFirestore.collection('students').doc<Student>(id).valueChanges().subscribe(studentRes => {
        this.student = studentRes;
      })

    })
  }

}
