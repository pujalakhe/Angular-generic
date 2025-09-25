import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../../model/employee-model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeFormBuilderService } from '../../services/employee-form-builder-service';

@Component({
  selector: 'app-employee-form-component',
  standalone: false,
  templateUrl: './employee-form-component.html',
  styleUrl: './employee-form-component.scss',
})
export class EmployeeFormComponent implements OnInit {
  @Input() mode: 'add' | 'edit' = 'add'; // to switch between Add/Edit
  @Input() initialData?: Employee; // optional data for edit
  @Output() formSubmit = new EventEmitter<Employee>();
  employeeForm?: FormGroup;
  constructor(private employeeFormBuilderService: EmployeeFormBuilderService) {}

  ngOnInit(): void {
    this.employeeFormBuilderService.buildEmployeeForm(this.initialData);
    this.employeeForm = this.employeeFormBuilderService.form;
  }

  onSubmit(): void {
    if (this.employeeForm?.invalid) {
      this.employeeFormBuilderService.applyTouchAndDirtyToForm();
      return;
    }

    this.formSubmit.emit(this.employeeForm?.value);
  }

  onReset() {
    this.employeeFormBuilderService.reset();
  }
}
