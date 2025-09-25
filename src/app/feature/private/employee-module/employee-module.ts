import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing-module';
import { PrivateLayoutComponent } from '../../../core/constants/components/private-layout-component/private-layout-component';
import { EmployeeListComponent } from './components/employee-list-component/employee-list-component';
import { EmployeeFormComponent } from './components/employee-form-component/employee-form-component';
import { MaterialModule } from '../../../shared/material/material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { AddEmployeeComponent } from './components/add-employee-component/add-employee-component';
import { UpdateEmployeeFormComponent } from './components/update-employee-form-component/update-employee-form-component';

@NgModule({
  declarations: [EmployeeListComponent, EmployeeFormComponent, AddEmployeeComponent, UpdateEmployeeFormComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    PrivateLayoutComponent,
  ],
})
export class EmployeeModule {}
