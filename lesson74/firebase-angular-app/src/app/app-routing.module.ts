import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './structure/home/home.component';
import { AddStudentComponent } from './student/add-student/add-student.component';
import { StudentComponent } from './student/student/student.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'add', component: AddStudentComponent, pathMatch: 'full'},
  { path: 'student/:id', component: StudentComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
