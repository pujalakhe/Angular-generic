import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmployeeFormBuilderService } from '../../../employee-module/services/employee-form-builder-service';

@Component({
  selector: 'app-form-array-component',
  standalone: false,
  templateUrl: './form-array-component.html',
  styleUrl: './form-array-component.scss',
})
export class FormArrayComponent {
  eventForm?: FormGroup;

  constructor(
    private employeeFormBuilderService: EmployeeFormBuilderService,
    private fb: FormBuilder
  ) {
    this.eventForm = this.fb.group({
      events: this.fb.array([this.createEvent()]),
    });
  }

  get events(): FormArray {
    return this.eventForm?.get('events') as FormArray;
  }

  createEvent(): FormGroup {
    return this.fb.group({
      eventName: ['', Validators.required],
      address: ['', Validators.required],
      time: ['', Validators.required],
    });
  }

  addEvent(): void {
    this.events.push(this.createEvent());
  }

  removeEvent(index: number): void {
    this.events.removeAt(index);
  }

  submit(): void {
    if (this.eventForm?.valid) {
      console.log(this.eventForm?.value);
    }
  }
}
