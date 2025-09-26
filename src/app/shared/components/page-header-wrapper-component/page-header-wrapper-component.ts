import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { MaterialModule } from '../../material/material-module';

@Component({
  selector: 'app-page-header-wrapper-component',
  imports: [MaterialModule],
  templateUrl: './page-header-wrapper-component.html',
  styleUrl: './page-header-wrapper-component.scss',
})
export class PageHeaderWrapperComponent {
  @Input({ required: true }) title: string = '';

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back(); // navigates to previous route
  }
}
