import { Component, OnInit, ViewChild } from '@angular/core';
import { Employee } from '../../model/employee-model';
import { ActivatedRoute } from '@angular/router';
import { MOCK_EMPLOYEES } from '../../mock-employee';
import { EmployeeFormComponent } from '../employee-form-component/employee-form-component';

// const MOCK_EMPLOYEE: Employee = {
//   id: '2',
//   name: 'Jane Doe',
//   department: 'HR',
//   role: 'Frontend Developer',
//   salary: '75000',
//   joiningDate: new Date('2023-08-15T00:00:00.000Z'),
// };
@Component({
  selector: 'app-update-employee-form-component',
  standalone: false,
  templateUrl: './update-employee-form-component.html',
  styleUrl: './update-employee-form-component.scss',
})
export class UpdateEmployeeFormComponent implements OnInit {
  employeeData?: Employee;
  label = 'UPDATE_EMPLOYEE.TITLE';

  constructor(private route: ActivatedRoute) {}
  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.employeeData = MOCK_EMPLOYEES.find((emp) => emp.id === id);
  }
  updateEmployee(employee: Employee): void {
    console.log(employee);
  }

  @ViewChild(EmployeeFormComponent)
  employeeFormComponent?: EmployeeFormComponent;
  // @ViewChild here because your AddEmployeeComponent doesn’t directly have the form itself; it contains the EmployeeFormComponent as a child:
  // Without @ViewChild, the parent (AddEmployeeComponent) has no way to know the child’s form state.

  canDeactivate(): boolean | Promise<Boolean> {
    return this.employeeFormComponent?.canDeactivate() ?? true;
  }
}
