import { Component } from '@angular/core';
import { ROUTE_PATHS } from '../../../../../core/constants/routes.constant';

@Component({
  selector: 'app-employee-list-component',
  standalone: false,
  templateUrl: './employee-list-component.html',
  styleUrl: './employee-list-component.scss',
})
export class EmployeeListComponent {
  route = ROUTE_PATHS;
}
