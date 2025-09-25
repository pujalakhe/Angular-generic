import { Component, HostListener, ViewChild } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SidebarComponent } from '../../../../shared/components/sidebar-component/sidebar-component';
import { HeaderComponent } from '../../../../shared/components/header-component/header-component';
import { MaterialModule } from '../../../../shared/material-module';

@Component({
  selector: 'app-private-layout-component',
  imports: [SidebarComponent, RouterModule, MaterialModule],
  templateUrl: './private-layout-component.html',
  styleUrl: './private-layout-component.scss',
})
export class PrivateLayoutComponent {
  isSidebarOpen = false;
  isMobile = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  @HostListener('window:resize')
  checkScreenSize() {
    this.isMobile = window.innerWidth < 768;
  }

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  onMenuItemClick() {
    if (this.isMobile) {
      this.isSidebarOpen = false;
    }
  }
}
