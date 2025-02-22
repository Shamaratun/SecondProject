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
    // Retrieve saved data from localStorage (if available)
    // this.u.sNumber = Number(localStorage.getItem('sNumber')) || 0;
    // this.u.name = localStorage.getItem('name') || '';
    // this.u.price = Number(localStorage.getItem('price')) || 0;
    // this.u.quantity = Number(localStorage.getItem('quantity')) || 0;
    // this.u.purchaseDate = new Date(localStorage.getItem('purchaseDate') || '');
    // this.u.sellDate = new Date(localStorage.getItem('sellDate') || '');
    // this.u.seller = localStorage.getItem('seller') || '';
    // this.u.buyer = localStorage.getItem('buyer') || '';
    console.log(this.u);
  }

  onSubmit() {
    let manager: Manager[] = JSON.parse(localStorage.getItem('manager') || '[]');
    if (this.isUpdate) {
      // Update the existing user based on serial number
      manager = manager.map((manager) => (manager.sNumber === this.u.sNumber ? this.u : manager));
    } else {
      // Add new user to the list
      manager.push(this.u);
    }

    // Save the updated user data to localStorage
    localStorage.setItem('managers', JSON.stringify(manager));

    // Reset the form object to clear the form after submit
    this.u = new Manager(0, '', 0, 0, new Date(), new Date(), '', '');

    // Redirect to the table page
    this.router.navigate(['/table']);
    // onSubmit() {
    //   let users: User[] = JSON.parse(localStorage.getItem('user') || '[]');
    //   if (this.isUpdate) {
    //     users = users.map((user) => (user.phone == this.u.phone ? this.u : user));
    //   } else {
    //     users.push(this.u);
    //   }
    //     localStorage.setItem('user', JSON.stringify(users));
    //     this.u = new User('', 0, '', '');
    //     //  alert('user added successfully')
    //     this.router.navigate(['/list']);
    //   }
    // }
  }
}
