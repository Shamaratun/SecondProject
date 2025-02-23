import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Manager } from '../app.component'; 
import { CommonModule } from '@angular/common';
import { ButtonComponent } from "./button/button.component";

@Component({
  selector: 'app-form',
  imports: [
    FormsModule, CommonModule,
    ButtonComponent
],
  templateUrl: './form.component.html',

  styleUrl: './form.component.css'
})
export class FormComponent {
  u: Manager = new Manager(0, '', 0, 0, new Date(), new Date(), '', ''); 
  isUpdate = false;
productForm: any;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['managers']) {
      this.u = nav.extras.state['managers'];  
      this.isUpdate = true;
    }
  }
  ngOnInit(): void {
    // Check if a manager is passed through state (i.e., it's an update scenario)
    if (this.isUpdate) {
      console.log('Editing Manager:', this.u);
    }
  }
  

  // onSubmit() {
  //   let managers: Manager[] = JSON.parse(localStorage.getItem('managers') || '[]');
  //   if (this.isUpdate) {
  //     // Update the existing manager based on serial number (sNumber)
  //     managers = managers.map(manager => (manager.sNumber === this.u.sNumber ? this.u : manager));
  //   } else {
  //   managers.push(this.u);
    // }
  
      onSubmit() {
        let managers: Manager[] = JSON.parse(localStorage.getItem('managers') || '[]');
    
        if (this.isUpdate) {
          managers = managers.map(manager =>manager.sNumber === this.u.sNumber ? this.u : manager);
        } else {
          const newProductId = managers.length > 0 ? Math.max(...managers.map(manager => manager.sNumber)) + 1 : 1;
          this.u.sNumber= newProductId;
          managers.push(this.u);
        }
    
    // Save the updated manager list to localStorage
    localStorage.setItem('managers', JSON.stringify(managers));
  
    // Reset the form after submission
    this.u = new Manager(0, '', 0, 0, new Date(), new Date(), '', '');
  
    // Navigate back to the table view
    this.router.navigate(['/table']);
  }
}  