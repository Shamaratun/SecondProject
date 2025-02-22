import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Manager } from '../app.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  Meme: Manager[] = [];

  constructor(private router: Router) { }

  ngOnInit() {
    // Retrieve managers from localStorage with the correct key
    let managers = JSON.parse(localStorage.getItem('managers') || '[]');
    this.Meme = managers;
  }

  editUser(manager: Manager) {
    // Send the selected manager as state to navigate to the form for updating
    this.router.navigate(['/form'], { state: { managers: manager } });
  }

  deleteUser(managerToDelete: Manager) {
    if (confirm('Are you sure you want to delete this user?')) {
      // Remove the manager from the Meme array by filtering out the manager
      this.Meme = this.Meme.filter(manager => manager !== managerToDelete);

      // Update localStorage with the new list of managers
      localStorage.setItem('managers', JSON.stringify(this.Meme));

      alert('User deleted successfully');
    }
  }
}
