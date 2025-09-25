import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendanceRoutingModule } from './attendance-routing-module';
import { PrivateLayoutComponent } from '../../../core/constants/components/private-layout-component/private-layout-component';

@NgModule({
  declarations: [],
  imports: [CommonModule, AttendanceRoutingModule, PrivateLayoutComponent],
})
export class AttendanceModule {}
