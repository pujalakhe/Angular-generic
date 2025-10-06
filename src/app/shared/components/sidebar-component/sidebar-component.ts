import { Component, EventEmitter, Output } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ROUTE_PATHS } from '../../../core/constants/routes.constant';
import { MaterialModule } from '../../material/material-module';
import { MenuItem } from '../../model/menu-item.model';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-sidebar-component',
  imports: [MaterialModule, RouterModule, TranslateModule],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.scss',
})
export class SidebarComponent {
  @Output() menuItemClicked = new EventEmitter<void>();
  menuItems: MenuItem[] = [
    {
      label: 'MENU.DASHBOARD',
      icon: 'dashboard',
      route: ROUTE_PATHS.DASHBOARD,
    },
    {
      label: 'MENU.EMPLOYEES',
      icon: 'people',
      route: [ROUTE_PATHS.EMPLOYEE, ROUTE_PATHS.LIST],
    },
    {
      label: 'MENU.ATTENDANCE',
      icon: 'fingerprint',
      route: ROUTE_PATHS.ATTENDANCE,
    },
  ];
}
