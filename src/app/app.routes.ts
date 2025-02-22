import { Routes } from '@angular/router';
import { TableComponent } from './list/table.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';


export const routes: Routes = [

  { path: 'table', component: TableComponent },
  { path: 'form', component: FormComponent },
  { path: 'header', component: HeaderComponent },
  { path: '**', redirectTo: '' },
];
