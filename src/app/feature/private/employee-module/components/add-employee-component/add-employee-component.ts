import { Component } from '@angular/core';
import { Employee } from '../../model/employee-model';

@Component({
  selector: 'app-add-employee-component',
  standalone: false,
  templateUrl: './add-employee-component.html',
  styleUrl: './add-employee-component.scss',
})
export class AddEmployeeComponent {
  addEmployee(employee: Employee) {
    console.log('Add:', employee);
    // call create API
  }
}
