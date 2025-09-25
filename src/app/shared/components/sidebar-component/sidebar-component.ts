import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../../material-module';

@Component({
  selector: 'app-sidebar-component',
  imports: [MaterialModule],
  templateUrl: './sidebar-component.html',
  styleUrl: './sidebar-component.scss',
})
export class SidebarComponent {
  @Output() menuItemClicked = new EventEmitter<void>();
  menuItems: any[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/dashboard' },
    { label: 'Employees', icon: 'people', route: '/employees' },
    { label: 'Settings', icon: 'settings', route: '/settings' },
  ];
}
