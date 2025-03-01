/*import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import * as bootstrap from 'bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-teachers',
  imports: [FormsModule, CommonModule],
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css'],
})
export class TeacherComponent implements OnInit {

  teachers: Teacher[] = []; 

  newTeacher1 : Teacher = {
    id: 0,
    name: '',
    schoolName: '',
    isHeadTeacher: false,
    assignedSubject: '',
    salary: 0,
    joiningDate: new Date(),
    isAggressive: false
  };

  newTeacher: Teacher = new Teacher(0, '', '', false, '', 0, new Date(), false);

 private modal: bootstrap.Modal |null = null;
 
  constructor(private teacherService: TeacherService) {} 

  ngOnInit(): void {
    console.log('Teacher component initialized');
    this.fetchTeachers();

    const modalElement = document.getElementById('teacherModal')!;
    if (modalElement) {
      this.modal = new bootstrap.Modal(modalElement);
    }
  }
  // getTeachers():void {
  //   this.teacherService.getTeachers().subscribe((teachers) => (this.teachers = teachers));}  

  fetchTeachers(){
    this.teacherService.getTeachers().subscribe(
      (data) => {
  this.teachers = data;
        console.log('Fetched teachers:', this.teachers);
      },
      (error) => {
        console.error('Error fetching teachers:', error);
        this.teachers = [];
      }
    );
  }
  addTeacher() {
        console.log('Added teachers:',this.newTeacher);
        this . teacherService.addTeacher(this.newTeacher).subscribe(
      (response) => {
        debugger;
        this.teachers.push(response);
        this . modal?.hide();
        this .resetForm();
      },
      (error) => {
        console.error('Error adding teachers:', error);
      }
        );
  }
  openModal() {
    const modalElement = document.getElementById('teacherModal')!;
    if (modalElement) {
    this . modal = new bootstrap.Modal(modalElement);
    this . modal.show();
  }
  } 
  resetForm() {
    this.newTeacher=new Teacher (0,"","",false,"",0,new Date(),false);
    this . newTeacher= {
      id: 0,
       name: "", 
       schoolName: "", 
       isHeadTeacher: false,
        assignedSubject: "", 
        salary: 0,
         joiningDate: new Date(), 
         isAggressive: false};
  };
}
truckByTeacher(index: number, teacher: Teacher) {
  return teacher.id;


export class Teacher {
  id: number;
  name: string;
  schoolName: string;
  isHeadTeacher: boolean;
  assignedSubject: string; 
  salary: number;
  joiningDate: Date;
  isAggressive: boolean;

  constructor(id: number, name: string,schoolName: string, isHeadTeacher: boolean,assignedSubjects: string,salary: number,joiningDate: Date,isAggressive: boolean) {
    this.id = id;
    this.name = name;
    this.schoolName = schoolName;
    this.isHeadTeacher = isHeadTeacher;
    this.assignedSubject = assignedSubjects;
    this.salary = salary;
    this.joiningDate = joiningDate;
    this.isAggressive = isAggressive;
  }
}*/

import { Component, OnInit } from '@angular/core';
import { TeacherService } from '../services/teacher.service';
import * as bootstrap from 'bootstrap';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Teacher } from '../model/teacher.model';



@Component({
  selector: 'app-teacher',
  imports: [FormsModule, CommonModule],
  templateUrl: './teacher.component.html',
  styleUrl: './teacher.component.css'
})
export class TeacherComponent implements OnInit {


  
  teachers: Teacher[] = [];

  newTeacher1: Teacher = {
    id: 0,
    name: '',
    schoolName: '',
    isHeadTeacher: false,
    assignedSubject: '',
    salary: 0,
    joiningDate: new Date(),
    isAggressive: false
  };

  newTeacher: Teacher = new Teacher(0, '', '', false, '', 0, new Date(), false);
isEditing: boolean = false;
  private modal: bootstrap.Modal | null = null;

  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    console.log('Teacher component initialized');
    this.fetchTeachers();

    const modalElement = document.getElementById('teacherModal');
    if (modalElement) {
      this.modal = new bootstrap.Modal(modalElement);
    }
  }

  fetchTeachers() {
    this.teacherService.getTeachers().subscribe(
      (data) => {
        this.teachers = data;
        console.log('Fetched teachers:', this.teachers);
      },
      (error) => {
        console.error('Error fetching teachers:', error);
        this.teachers = [];
      }
    );
  }

  SaveTeacher() {
   if(this.newTeacher){
    if(this.isEditing){
    console.log('Updating teacher:', this.newTeacher);
   
    this.teacherService.updateTeacher(this.newTeacher).subscribe(
      (response ) => {
        const index = this.teachers.findIndex(t => t.id === response.id);
        if (index !== -1) {
          this.teachers[index] = response;
        } 
          this.modal?.hide();
      },
      (error: any) => {
        console.error('Error updating teacher:', error);
        }
      );
    }else{
      console.log('Adding teacher:', this.newTeacher);
     
      this.teacherService.addTeacher(this.newTeacher).subscribe(
        (response) => {
          debugger;
          this.teachers.push(response);
          this.modal?.hide();
          this.resetForm();
        },
        (error) => {
          console.error('Error adding teacher:', error);
        }
      );
    }
  }}

  openModal(teacher?: Teacher) {
    if(teacher){
      this.newTeacher = {...teacher};
      this.isEditing = true;

    }else{
      this.newTeacher = new Teacher(0, '', '', false, '', 0, new Date(), false);
      this.isEditing = false;
    }
    const modalElement = document.getElementById('teacherModal');
    if (modalElement) {
      this.modal = new bootstrap.Modal(modalElement);
      this.modal.show();
    }
  }

  resetForm() {
    this.newTeacher = new Teacher(0, '', '', false, '', 0, new Date(), false);
    this.newTeacher = {
      id: 0,
      name: '',
      schoolName: '',
      isHeadTeacher: false,
      assignedSubject: '',
      salary: 0,
      joiningDate: new Date(),
      isAggressive: false
    };
  }

  trackByTeacher(index: number, teacher: Teacher) {
    return teacher.id;
  }
 

  deleteTeacher(id: number) {
    if (confirm('Are you sure you want to delete this teacher?')) {
      this.teacherService.deleteTeacher(id).subscribe(
        () => {
        
          this.teachers = this.teachers.filter(t => t.id !== id);
          alert('Teacher deleted successfully');
        },
        (error) => {
          console.error('Error deleting teacher:', error);
        }
      );
    }
  }
}
