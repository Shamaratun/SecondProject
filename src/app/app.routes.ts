import {Routes} from '@angular/router';
import {TableComponent} from './table/table.component';
import {FormComponent} from './form/form.component';


export const routes: Routes = [

  {path: 'table', component: TableComponent},
  {path: 'form', component: FormComponent},
  // // { path: 'content', component: ContentComponent },
  {path: '**', redirectTo: ''},
];
