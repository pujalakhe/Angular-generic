import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../material/material-module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-text-component',
  imports: [MaterialModule, ReactiveFormsModule],
  templateUrl: './input-text-component.html',
  styleUrl: './input-text-component.scss',
})
export class InputTextComponent {
  @Input() control?: FormControl;
  @Input() label!: string;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';
}
