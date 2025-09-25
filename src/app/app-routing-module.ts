import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateLayoutComponent } from './core/constants/components/private-layout-component/private-layout-component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./feature/public/auth-module/auth-module').then(
        (m) => m.AuthModule
      ),
  },
  {
    path: '',
    component: PrivateLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('./feature/private/dashboard-module/dashboard-module').then(
            (m) => m.DashboardModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./feature/private/employee-module/employee-module').then(
            (m) => m.EmployeeModule
          ),
      },
      {
        path: '',
        loadChildren: () =>
          import('./feature/private/attendance-module/attendance-module').then(
            (m) => m.AttendanceModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
