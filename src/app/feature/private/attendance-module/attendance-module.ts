import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing-module';
import { PrivateLayoutComponent } from '../../../core/constants/components/private-layout-component/private-layout-component';
import { AttendanceListComponent } from './components/attendance-list-component/attendance-list-component';
import { FilterComponent } from '../../../shared/components/filter-component/filter-component';

@NgModule({
  declarations: [AttendanceListComponent],
  imports: [
    CommonModule,
    AttendanceRoutingModule,
    PrivateLayoutComponent,
    FilterComponent,
  ],
})
export class AttendanceModule {}
