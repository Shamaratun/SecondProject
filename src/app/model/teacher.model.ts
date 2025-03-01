
export class Teacher {
    id: number;
    name: string;
    schoolName: string;
    isHeadTeacher: boolean;
    assignedSubject: string;
    salary: number;
    joiningDate: Date;
    isAggressive: boolean;
  
    constructor(id: number, name: string, schoolName: string, isHeadTeacher: boolean, assignedSubject: string, salary: number, joiningDate: Date, isAggressive: boolean) {
      this.id = id;
      this.name = name;
      this.schoolName = schoolName;
      this.isHeadTeacher = isHeadTeacher;
      this.assignedSubject = assignedSubject;
      this.salary = salary;
      this.joiningDate = joiningDate;
      this.isAggressive = isAggressive;
    }
  } 