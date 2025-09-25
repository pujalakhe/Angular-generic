import { Component } from '@angular/core';
import { Employee } from '../../model/employee-model';

const MOCK_EMPLOYEE: Employee = {
  id: '2',
  name: 'Jane Doe',
  department: 'HR',
  role: 'Frontend Developer',
  salary: '75000',
  joiningDate: new Date('2023-08-15T00:00:00.000Z'),
};
@Component({
  selector: 'app-update-employee-form-component',
  standalone: false,
  templateUrl: './update-employee-form-component.html',
  styleUrl: './update-employee-form-component.scss',
})
export class UpdateEmployeeFormComponent {
  mockEmployee = MOCK_EMPLOYEE;

  updateEmployee(employee: Employee): void {
    console.log(employee);
  }
}
