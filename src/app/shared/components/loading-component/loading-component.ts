import { Component } from '@angular/core';
import { MaterialModule } from '../../material/material-module';

@Component({
  selector: 'app-loading-component',
  standalone: true,
  templateUrl: './loading-component.html',
  styleUrl: './loading-component.scss',
  imports: [MaterialModule],
})
export class LoadingComponent {}
