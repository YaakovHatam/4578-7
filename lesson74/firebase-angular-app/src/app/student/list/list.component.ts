import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Student } from 'src/app/models/student.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  studentsList: Student[];

  constructor(private angularFirestore: AngularFirestore) { }

  ngOnInit() {
    this.angularFirestore.collection('students').snapshotChanges().subscribe(studentsListResult => {
      this.studentsList = [];
      studentsListResult.map(studentSnapshot => {
        const stu = <Student>studentSnapshot.payload.doc.data();
        stu.id = studentSnapshot.payload.doc.id;
        this.studentsList.push(stu);
      });
    });
  }
}
