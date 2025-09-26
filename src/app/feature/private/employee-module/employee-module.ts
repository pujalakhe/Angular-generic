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
import { OnlyNumericValueDirective } from '../../../shared/custom-directives/only-numeric-value-directive';
import { AutoFocusInputDirective } from '../../../shared/custom-directives/auto-focus-input-directive';
import { AutoInvalidFocusDirective } from '../../../shared/custom-directives/auto-invalid-focus-directive';
import { BaseTableComponent } from '../../../shared/components/base-table-component/base-table-component';
import { EmployeeDetailComponent } from './components/employee-detail-component/employee-detail-component';
import { HeaderComponent } from '../../../shared/components/header-component/header-component';
import { ListWrapperComponent } from '../../../shared/components/list-wrapper-component/list-wrapper-component';
import { PageHeaderWrapperComponent } from '../../../shared/components/page-header-wrapper-component/page-header-wrapper-component';

@NgModule({
  declarations: [
    EmployeeListComponent,
    EmployeeFormComponent,
    AddEmployeeComponent,
    UpdateEmployeeFormComponent,
    EmployeeDetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    EmployeeRoutingModule,
    PrivateLayoutComponent,
    OnlyNumericValueDirective,
    AutoFocusInputDirective,
    AutoInvalidFocusDirective,
    BaseTableComponent,
    HeaderComponent,
    ListWrapperComponent,
    PageHeaderWrapperComponent,
  ],
})
export class EmployeeModule {}
