import { Component } from '@angular/core';
import { Employee } from '../../model/employee-model';

@Component({
  selector: 'app-update-employee-form-component',
  standalone: false,
  templateUrl: './update-employee-form-component.html',
  styleUrl: './update-employee-form-component.scss',
})
export class UpdateEmployeeFormComponent {
  updateEmployee(employee: Employee): void {
    console.log(employee);
  }
}
