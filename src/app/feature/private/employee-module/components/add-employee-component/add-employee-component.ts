import { Component, ViewChild } from '@angular/core';
import { Employee } from '../../model/employee-model';
import { EmployeeFormComponent } from '../employee-form-component/employee-form-component';
import { EmployeeApiService } from '../../services/employee-api-service';
import { Store } from '@ngrx/store';
import { addEmployee } from '../../store/employee/employee.action';

@Component({
  selector: 'app-add-employee-component',
  standalone: false,
  templateUrl: './add-employee-component.html',
  styleUrl: './add-employee-component.scss',
})
export class AddEmployeeComponent {
  label = 'ADD_EMPLOYEE.TITLE';
  constructor(
    private employeeApiService: EmployeeApiService,
    private store: Store
  ) {}
  addEmployee(employee: Employee) {
    console.log('Add:', employee);
    // call create API
    this.store.dispatch(addEmployee({ employee: employee }));
  }

  @ViewChild(EmployeeFormComponent)
  employeeFormComponent?: EmployeeFormComponent;
  // @ViewChild here because your AddEmployeeComponent doesn’t directly have the form itself; it contains the EmployeeFormComponent as a child:
  // Without @ViewChild, the parent (AddEmployeeComponent) has no way to know the child’s form state.

  canDeactivate(): boolean | Promise<Boolean> {
    return this.employeeFormComponent?.canDeactivate() ?? true;
  }
}
