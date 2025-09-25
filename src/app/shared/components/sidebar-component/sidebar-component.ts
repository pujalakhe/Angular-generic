import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTE_PATHS } from '../../../core/constants/routes.constant';
import { MaterialModule } from '../../material/material-module';

@Component({
  selector: 'app-sidebar-component',
  imports: [MaterialModule, RouterModule],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.scss',
})
export class SidebarComponent {
  @Output() menuItemClicked = new EventEmitter<void>();
  menuItems: any[] = [
    { label: 'Dashboard', icon: 'dashboard', route: ROUTE_PATHS.DASHBOARD },
    {
      label: 'Employees',
      icon: 'people',
      route: [ROUTE_PATHS.EMPLOYEE, ROUTE_PATHS.LIST],
    },
    { label: 'Settings', icon: 'settings', route: '/settings' },
  ];
}
