import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ROUTE_PATHS } from '../../../core/constants/routes.constant';
import { EmployeeListComponent } from './components/employee-list-component/employee-list-component';

const routes: Routes = [
  {
    path: ROUTE_PATHS.LIST,
    component: EmployeeListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule {}
