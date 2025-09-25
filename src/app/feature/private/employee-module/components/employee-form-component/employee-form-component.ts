import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../../model/employee-model';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeFormBuilderService } from '../../services/employee-form-builder-service';

const mockEmployee: Employee = {
  id: '2',
  name: 'Jane Doe',
  department: 'HR',
  role: 'Frontend Developer',
  salary: '75000',
  joiningDate: new Date('2023-08-15T00:00:00.000Z'),
};
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
    this.initializeFrom();
    this.employeeForm = this.employeeFormBuilderService.form;
    this.disableControls();
  }

  initializeFrom() {
    if (this.mode == 'add') {
      this.employeeFormBuilderService.buildEmployeeForm(this.initialData);
    } else {
      this.employeeFormBuilderService.buildEmployeeForm(mockEmployee);
    }
  }

  disableControls() {
    if (this.mode === 'edit') {
      this.employeeFormBuilderService.disableControls([
        'joiningDate',
        'role',
        'department',
      ]);
    } else {
      this.employeeFormBuilderService.enableControls([
        'joiningDate',
        'role',
        'department',
      ]);
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
