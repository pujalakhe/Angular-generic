import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AttendanceListComponent } from './components/attendance-list-component/attendance-list-component';
import { FormArrayComponent } from './components/form-array-component/form-array-component';
import { DropdownValidationComponent } from './dropdown-validation-component/dropdown-validation-component';

const routes: Routes = [
  {
    path: '',
    component: AttendanceListComponent,
  },
  {
    path: 'form-array',
    component: FormArrayComponent,
  },
  {
    path: 'dropdown',
    component: DropdownValidationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AttendanceRoutingModule {}
