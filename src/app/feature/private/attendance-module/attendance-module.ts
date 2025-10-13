import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing-module';
import { PrivateLayoutComponent } from '../../../core/constants/components/private-layout-component/private-layout-component';
import { AttendanceListComponent } from './components/attendance-list-component/attendance-list-component';
import { FilterComponent } from '../../../shared/components/filter-component/filter-component';

import { FileUploadComponent } from '../../../shared/components/file-upload-component/file-upload-component';
import { FormArrayComponent } from './components/form-array-component/form-array-component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../../shared/material/material-module';
import { DropdownValidationComponent } from './dropdown-validation-component/dropdown-validation-component';
import { InputSelectComponent } from '../../../shared/components/generic-inputs/input-select-component/input-select-component';
import { InputNumberComponent } from '../../../shared/components/generic-inputs/input-number-component/input-number-component';

@NgModule({
  declarations: [
    AttendanceListComponent,
    FormArrayComponent,
    DropdownValidationComponent,
  ],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    PrivateLayoutComponent,
    FilterComponent,
    FileUploadComponent,
    ReactiveFormsModule,
    MaterialModule,
    InputSelectComponent,
    InputNumberComponent,
  ],
})
export class AttendanceModule {}
