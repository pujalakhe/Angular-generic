import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../../model/employee-model';
import { FormControl, FormGroup } from '@angular/forms';
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

  departmentOptions = [
    { value: 'HR', label: 'Human Resources' },
    { value: 'Finance', label: 'Finance' },
    { value: 'IT', label: 'Information Technology' },
    { value: 'Marketing', label: 'Marketing' },
  ];
  ngOnInit(): void {
    this.#buildForm();
    this.employeeForm = this.employeeFormBuilderService.form;
    this.#disableOrEnableControls();
  }

  get department() {
    return this.employeeForm?.get('department') as FormControl;
  }
  #buildForm() {
    this.employeeFormBuilderService.buildEmployeeForm(this.initialData);
  }

  #disableOrEnableControls(): void {
    const fields = ['joiningDate', 'role', 'department'];
    if (this.mode === 'edit') {
      this.employeeFormBuilderService.disableControls(fields);
    } else {
      this.employeeFormBuilderService.enableControls(fields);
    }
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
