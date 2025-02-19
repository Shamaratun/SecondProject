import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router, RouterOutlet} from '@angular/router';
import {AppComponent, Manager} from '../app.component';

@Component({
  selector: 'app-form',
  imports: [
    FormsModule
  ],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  u: Manager = new Manager('', 0, 0, "", "", '', '', 0);
  isUpdate = false;

  constructor(private router: Router) {
    const nav = this.router.getCurrentNavigation();
    if (nav?.extras?.state?.['users']) {
      this.u = nav.extras.state['users'];
      this.isUpdate = true;
    }
  }

  ngOnInit(): void {

    localStorage.setItem('name', 'john');
    localStorage.setItem('price', '12325');
    localStorage.setItem('quantity', '45');
    localStorage.setItem('purchaseDate', '2022-12-12');
    localStorage.setItem('sellDate', '2022-12-12');
    localStorage.setItem('seller', 'john');
    localStorage.setItem('buyer', 'john');

  }


  onSubmit() {
    let users: Manager[] = JSON.parse(localStorage.getItem('user') || '[]');
    if (this.isUpdate) {
      users = users.map((user) => (user.sNumber == this.u.sNumber ? this.u : user));
    } else {
      users.push(this.u);
    }
    localStorage.setItem('user', JSON.stringify(users));
    this.u = new Manager('', 0, 0, "", "", '', '', 0);
    //  alert('user added successfully')
    this.router.navigate(['/table'])
  }
}



