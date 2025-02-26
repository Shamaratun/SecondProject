import { Routes } from '@angular/router';
import { TableComponent } from './list/table.component';
import { FormComponent } from './form/form.component';
import { HeaderComponent } from './header/header.component';
import { ActionComponent } from './page/action/action.component';
import { HarryPotterComponent } from './harry-potter/harry-potter.component';


export const routes: Routes = [

  { path: 'table', component: TableComponent },
  { path: 'form', component: FormComponent },
  { path: 'header', component: HeaderComponent },
    { path: 'action', component: ActionComponent },
    { path: 'harry-potter', component: HarryPotterComponent },
  { path: '**', redirectTo: '' },
];
