import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../material/material-module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-input-text-component',
  imports: [MaterialModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './input-text-component.html',
  styleUrl: './input-text-component.scss',
})
export class InputTextComponent {
  @Input() control?: FormControl;
  @Input() label!: string;
  @Input() placeholder: string = '';
  @Input() type: string = 'text';

  get errorMessage() {
    return `${this.label} is required`;
  }
}
