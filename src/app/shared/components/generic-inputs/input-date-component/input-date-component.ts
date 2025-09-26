import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../material/material-module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-date-component',
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './input-date-component.html',
  styleUrl: './input-date-component.scss',
})
export class InputDateComponent {
  @Input({ required: true }) control?: FormControl;
  @Input({ required: true }) label?: string;
  @Input({ required: true }) placeholder: string = '';
}
