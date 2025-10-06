import { Component, Input } from '@angular/core';
import { MaterialModule } from '../../../material/material-module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { OnlyNumericValueDirective } from '../../../custom-directives/only-numeric-value-directive';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-input-number-component',
  imports: [
    MaterialModule,
    ReactiveFormsModule,
    OnlyNumericValueDirective,
    TranslateModule,
  ],
  templateUrl: './input-number-component.html',
  styleUrl: './input-number-component.scss',
})
export class InputNumberComponent {
  @Input() control?: FormControl;
  @Input() label?: string;
  @Input() placeholder: string = '';
  @Input() min?: number;
}
