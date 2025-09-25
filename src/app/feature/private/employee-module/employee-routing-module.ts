import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  QUERY_PARAM,
  ROUTE_PATHS,
} from '../../../core/constants/routes.constant';
import { EmployeeListComponent } from './components/employee-list-component/employee-list-component';
import { EmployeeFormComponent } from './components/employee-form-component/employee-form-component';
import { AddEmployeeComponent } from './components/add-employee-component/add-employee-component';
import { UpdateEmployeeFormComponent } from './components/update-employee-form-component/update-employee-form-component';

const routes: Routes = [
  {
    path: ROUTE_PATHS.LIST,
    component: EmployeeListComponent,
  },
  {
    path: ROUTE_PATHS.ADD,
    component: AddEmployeeComponent,
  },
  {
    path: `${ROUTE_PATHS.UPDATE}/:${QUERY_PARAM.ID}`,
    component: UpdateEmployeeFormComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
