import { Component } from '@angular/core';
import { ROUTE_PATHS } from '../../../../../core/constants/routes.constant';
import { Employee } from '../../model/employee-model';
import { MOCK_EMPLOYEES } from '../../mock-employee';
import { TableColumn } from '../../../../../shared/model/table-column.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list-component',
  standalone: false,
  templateUrl: './employee-list-component.html',
  styleUrl: './employee-list-component.scss',
})
export class EmployeeListComponent {
  readonly ADD = ROUTE_PATHS.ADD;
  readonly EMPLOYEE = ROUTE_PATHS.EMPLOYEE;
  employees: Employee[] = MOCK_EMPLOYEES;

  constructor(private router: Router) {}

  employeeColumns: TableColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'department', label: 'Department' },
    { key: 'role', label: 'role' },
  ];

  actions = [
    { type: 'view', label: 'View', color: 'primary' },
    { type: 'edit', label: 'Edit', color: 'accent' },
    { type: 'delete', label: 'Delete', color: 'warn' },
  ];

  handleAction(event: { type: string; row: Employee }) {
    // console.log('type', event.type);
    // console.log('row', event.row);

    switch (event.type) {
      case 'view':
        this.router.navigate([
          ROUTE_PATHS.EMPLOYEE,
          ROUTE_PATHS.DETAIL,
          event.row.id,
        ]);
        break;

      case 'edit':
        console.log(event.row.id);
        this.router.navigate([
          ROUTE_PATHS.EMPLOYEE,
          ROUTE_PATHS.UPDATE,
          event.row.id,
        ]);
        console.log('Edit', event.row);
        break;

      case 'delete':
        console.log('Delete', event.row);
        break;
    }
  }
}
