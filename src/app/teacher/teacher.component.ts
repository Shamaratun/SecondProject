import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import * as bootstrap from 'bootstrap';


import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teacher',
  imports: [FormsModule, CommonModule],
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {

  teachers: Teacher[] = []; 
 newTeacher: Teacher = {
   id: 0, name: "", schoolName: "", isHeadTeacher: false, assignedSubjects: "", salary: 0, joiningDate: new Date(), isAggressive: false,
  
 }; 
 private modal: bootstrap.Modal |null = null;
  constructor(private teacherService: TeacherService) {} 
  ngOnInit(): void {
    console.log('Teacher component initialized');
    this.fetchTeachers(); 
  }
  getTeachers():void {this.teacherService.getTeachers().subscribe((teachers:any) => (this.teachers = teachers));}  

  fetchTeachers(): void {this.teacherService.getTeachers().subscribe((data: any) => {
  this.teachers = data;
        console.log('Fetched teachers:', this.teachers);
      },
      (error: any) => {
        console.error('Error fetching teachers:', error);
      }
    );
  }

 
  addTeacher() {
   
        console.log('Added teacher:',this.teachers);
        this . teacherService.addTeacher(this.teachers).subscribe(
      (response: any) => {
        debugger
        this.teachers.push(response);
        this . modal?.hide();
        this .resetForm();
      }
    ),
      (error: any) => {
        console.error('Error adding teacher:', error);
      }
    ;
  }
  openModal() {
    const modalElement = document.getElementById('teacherModal')!;
    if (modalElement) {
    this . modal = new bootstrap.Modal(modalElement);
    this . modal.show();
  }
  } 
  resetForm() {
    this . newTeacher  = {id: 0, name: "", schoolName: "", isHeadTeacher: false, assignedSubjects: "", salary: 0, joiningDate: new Date(), isAggressive: false};
  }
}
class Teacher {
 
  id: number;
  name: string;
  schoolName: string;
  isHeadTeacher: boolean;
  assignedSubjects: string;
  salary: number;
  joiningDate: Date;
  isAggressive: boolean;

  constructor(
    id: number,
    name: string,
    schoolName: string,
    isHeadTeacher: boolean,
    assignedSubjects: string,
    salary: number,
    joiningDate: Date,
    isAggressive: boolean
  ) {
    this.id = id;
    this.name = name;
    this.schoolName = schoolName;
    this.isHeadTeacher = isHeadTeacher;
    this.assignedSubjects = assignedSubjects;
    this.salary = salary;
    this.joiningDate = joiningDate;
    this.isAggressive = isAggressive;
  }
}
function getTeachers() {
  throw new Error('Function not implemented.');
}

function openModal() {
  throw new Error('Function not implemented.');
}

