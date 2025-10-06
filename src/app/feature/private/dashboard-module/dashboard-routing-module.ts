import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardHomeComponent } from './components/dashboard-home-component/dashboard-home-component';
import { ROUTE_PATHS } from '../../../core/constants/routes.constant';

const routes: Routes = [
  {
    path: '',
    component: DashboardHomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
