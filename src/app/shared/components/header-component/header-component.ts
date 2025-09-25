import { Component } from '@angular/core';
import { MaterialModule } from '../../material-module';

@Component({
  selector: 'app-header-component',
  imports: [MaterialModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {}
