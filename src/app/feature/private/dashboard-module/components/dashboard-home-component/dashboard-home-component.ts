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
  headerText: string = 'Dashboard';
  loading: boolean = true;
  columns: TableColumn[] = [
    { key: 'name', label: 'Name' },
    { key: 'department', label: 'Department' },
    { key: 'role', label: 'Role' },
    { key: 'joiningDate', label: 'Joining Date' },
  ];
  // Summary cards
  cards: Card[] = [
    { title: 'Employees', value: 120, icon: 'person', color: 'bg-blue-500' },
    {
      title: 'Departments',
      value: 8,
      icon: 'apartment',
      color: 'bg-green-500',
    },
    { title: 'Open Positions', value: 5, icon: 'work', color: 'bg-yellow-500' },
    {
      title: 'Pending Leaves',
      value: 12,
      icon: 'event_busy',
      color: 'bg-red-500',
    },
  ];

  // Sample recent employees table
  recentEmployees = [
    {
      name: 'John Doe',
      department: 'Engineering',
      role: 'Frontend Developer',
      joiningDate: '2025-08-01',
    },
    {
      name: 'Jane Smith',
      department: 'HR',
      role: 'Recruiter',
      joiningDate: '2025-07-15',
    },
    {
      name: 'Mike Johnson',
      department: 'Finance',
      role: 'Accountant',
      joiningDate: '2025-06-20',
    },
  ];
}
