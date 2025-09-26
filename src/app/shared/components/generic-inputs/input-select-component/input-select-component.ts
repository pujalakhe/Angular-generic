import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../material/material-module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-select-component',
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './input-select-component.html',
  styleUrl: './input-select-component.scss',
})
export class InputSelectComponent {
  @Input({ required: true }) control?: FormControl;
  @Input({ required: true }) label: string = 'Select option';
  @Input({ required: true }) options: { value: string; label: string }[] = [];
  @Input({ required: true }) placeholder: string = 'Please choose';
}
