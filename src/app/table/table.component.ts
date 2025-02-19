import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {AppComponent, Manager} from '../app.component';


@Component({
  selector: 'app-table',
  imports: [],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  Meme: Manager[] = [];

  constructor(private router: Router) {
  }

  ngOnInit() {
    let users = JSON.parse(localStorage.getItem('users') || '[]');
    this.Meme = users;
  }

  editUser(users: Manager) {
    this.router.navigate(['/create'], {state: {users}});
  }

  deleteUser(users: Manager) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.Meme = this.Meme.filter((user) => user !== users);
      localStorage.setItem('user', JSON.stringify(this.Meme));
      alert('user deleted successfully');
    }
  }
}

