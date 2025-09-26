import { Component, Input } from '@angular/core';
import { Location } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material-module';

@Component({
  selector: 'app-list-wrapper-component',
  imports: [MaterialModule, RouterModule],
  templateUrl: './list-wrapper-component.html',
  styleUrl: './list-wrapper-component.scss',
})
export class ListWrapperComponent {
  @Input({ required: true }) title?: string;
  @Input() buttonLabel = '';
  @Input() navigateTo: string[] | string = '';
  @Input() icon: string = '';

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back(); // navigates to previous route
  }
}
