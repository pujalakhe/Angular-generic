import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material/material-module';

@Component({
  selector: 'app-header-component',
  imports: [MaterialModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  @Input({ required: true }) header: string = '';
}
