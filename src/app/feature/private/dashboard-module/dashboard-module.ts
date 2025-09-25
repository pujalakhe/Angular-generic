import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing-module';
import { DashboardHomeComponent } from './components/dashboard-home-component/dashboard-home-component';
import { PrivateLayoutComponent } from '../../../core/constants/components/private-layout-component/private-layout-component';

@NgModule({
  declarations: [DashboardHomeComponent],
  imports: [CommonModule, DashboardRoutingModule, PrivateLayoutComponent],
})
export class DashboardModule {}
