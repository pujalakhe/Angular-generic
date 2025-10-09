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

@NgModule({
  declarations: [AttendanceListComponent, FormArrayComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    PrivateLayoutComponent,
    FilterComponent,
    FileUploadComponent,
    ReactiveFormsModule,
    MaterialModule,
  ],
})
export class AttendanceModule {}
