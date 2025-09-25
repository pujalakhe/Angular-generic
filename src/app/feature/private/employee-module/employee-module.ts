import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing-module';
import { PrivateLayoutComponent } from '../../../core/constants/components/private-layout-component/private-layout-component';
import { EmployeeListComponent } from './components/employee-list-component/employee-list-component';
import { EmployeeFormComponent } from './components/employee-form-component/employee-form-component';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeFormComponent
  ],
  imports: [CommonModule, EmployeeRoutingModule, PrivateLayoutComponent],
})
export class EmployeeModule {}
