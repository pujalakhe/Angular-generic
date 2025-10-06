import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MaterialModule } from '../../../material/material-module';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-input-select-component',
  imports: [MaterialModule, ReactiveFormsModule, TranslateModule],
  templateUrl: './input-select-component.html',
  styleUrl: './input-select-component.scss',
})
export class InputSelectComponent {
  @Input({ required: true }) control?: FormControl;
  @Input({ required: true }) label: string = 'Select option';
  @Input({ required: true }) options: { value: string; label: string }[] = [];
  @Input() placeholder: string = 'Please choose';

  @Output() inputSelectChanged: EventEmitter<string> =
    new EventEmitter<string>();

  ngOnInit() {
    if (this.control) {
      this.control.valueChanges.subscribe((value) => {
        this.inputSelectChanged.emit(value);
      });
    }
  }
}
