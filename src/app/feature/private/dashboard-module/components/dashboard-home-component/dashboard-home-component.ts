import { Component } from '@angular/core';
import { Card } from '../../../../../shared/model/dashboard-card.model';
import { TableColumn } from '../../../../../shared/model/table-column.model';

@Component({
  selector: 'app-dashboard-home-component',
  standalone: false,
  templateUrl: './dashboard-home-component.html',
  styleUrl: './dashboard-home-component.scss',
})
export class DashboardHomeComponent {
  headerText: string = 'DASHBOARD.HEADER';
  loading: boolean = true;
  columns: TableColumn[] = [
    { key: 'name', label: 'DASHBOARD.TABLE.COLUMNS.NAME' },
    { key: 'department', label: 'DASHBOARD.TABLE.COLUMNS.DEPARTMENT' },
    { key: 'role', label: 'DASHBOARD.TABLE.COLUMNS.ROLE' },
    { key: 'joiningDate', label: 'DASHBOARD.TABLE.COLUMNS.JOINING_DATE' },
  ];
  // Summary cards
  cards: Card[] = [
    {
      title: 'DASHBOARD.CARDS.EMPLOYEES',
      value: 120,
      icon: 'person',
      color: 'bg-blue-500',
    },
    {
      title: 'DASHBOARD.CARDS.DEPARTMENTS',
      value: 8,
      icon: 'apartment',
      color: 'bg-green-500',
    },
    {
      title: 'DASHBOARD.CARDS.OPEN_POSITIONS',
      value: 5,
      icon: 'work',
      color: 'bg-yellow-500',
    },
    {
      title: 'DASHBOARD.CARDS.PENDING_LEAVES',
      value: 12,
      icon: 'event_busy',
      color: 'bg-red-500',
    },
  ];

  // Sample recent employees table
  recentEmployees = [
    {
      name: 'John Doe',
      department: 'RECENT_EMPLOYEES.DEPARTMENT.ENGINEERING',
      role: 'RECENT_EMPLOYEES.ROLE.FRONTEND_DEVELOPER',
      joiningDate: '2025-08-01',
    },
    {
      name: 'Jane Smith',
      department: 'RECENT_EMPLOYEES.DEPARTMENT.HR',
      role: 'RECENT_EMPLOYEES.ROLE.RECRUITER',
      joiningDate: '2025-07-15',
    },
    {
      name: 'Mike Johnson',
      department: 'RECENT_EMPLOYEES.DEPARTMENT.FINANCE',
      role: 'RECENT_EMPLOYEES.ROLE.ACCOUNTANT',
      joiningDate: '2025-06-20',
    },
  ];
}
