import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  QUERY_PARAM,
  ROUTE_PATHS,
} from '../../../core/constants/routes.constant';
import { EmployeeListComponent } from './components/employee-list-component/employee-list-component';
import { AddEmployeeComponent } from './components/add-employee-component/add-employee-component';
import { UpdateEmployeeFormComponent } from './components/update-employee-form-component/update-employee-form-component';
import { EmployeeDetailComponent } from './components/employee-detail-component/employee-detail-component';
import { unsavedChangesGuard } from '../../../core/guards/unsaved-changes-guard';

const routes: Routes = [
  {
    path: ROUTE_PATHS.LIST,
    component: EmployeeListComponent,
  },
  {
    path: ROUTE_PATHS.ADD,
    component: AddEmployeeComponent,
    canDeactivate: [unsavedChangesGuard],
  },
  {
    path: `${ROUTE_PATHS.UPDATE}/:${QUERY_PARAM.ID}`,
    component: UpdateEmployeeFormComponent,
    canDeactivate: [unsavedChangesGuard],
  },
  {
    path: `${ROUTE_PATHS.DETAIL}/:${QUERY_PARAM.ID}`,
    component: EmployeeDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
