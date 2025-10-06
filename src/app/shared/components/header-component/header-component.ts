import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../material/material-module';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header-component',
  imports: [MaterialModule, TranslateModule],
  templateUrl: './header-component.html',
  styleUrl: './header-component.scss',
})
export class HeaderComponent {
  @Input({ required: true }) header: string = '';
}
