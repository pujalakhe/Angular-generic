import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Employee } from '../../model/employee-model';
import { FormControl, FormGroup } from '@angular/forms';
import { EmployeeFormBuilderService } from '../../services/employee-form-builder-service';
import { CanComponentDeactivate } from '../../../../../core/guards/unsaved-changes-guard';
import { LeavePageConfirmationDialogComponent } from '../../../../../shared/components/leave-page-confirmation-dialog-component/leave-page-confirmation-dialog-component';
import { MatDialog } from '@angular/material/dialog';
import { confirmUnsavedChanges } from '../../../../../core/utils/form.utils';

const EMP_FORM = 'EMPLOYEE_FORM';
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

  constructor(
    private employeeFormBuilderService: EmployeeFormBuilderService,
    private dialog: MatDialog
  ) {}

  reset = `${EMP_FORM}.RESET`;
  save = `${EMP_FORM}.SAVE`;
  update = `${EMP_FORM}.UPDATE`;

  departmentOptions = [
    { value: 'HR', label: 'EMPLOYEE_FORM.DEPARTMENT_OPTIONS.HR' },
    { value: 'Finance', label: 'EMPLOYEE_FORM.DEPARTMENT_OPTIONS.FINANCE' },
    { value: 'IT', label: 'EMPLOYEE_FORM.DEPARTMENT_OPTIONS.IT' },
    { value: 'Marketing', label: 'EMPLOYEE_FORM.DEPARTMENT_OPTIONS.MARKETING' },
  ];
  ngOnInit(): void {
    this.#buildForm();
    this.employeeForm = this.employeeFormBuilderService.form;
    this.#disableOrEnableControls();
  }

  get department() {
    return this.employeeForm?.get('department') as FormControl;
  }
  get full_name(): FormControl {
    return this.employeeForm?.get('name') as FormControl;
  }

  get role(): FormControl {
    return this.employeeForm?.get('role') as FormControl;
  }

  get joiningDate(): FormControl {
    return this.employeeForm?.get('joiningDate') as FormControl;
  }

  get salary(): FormControl {
    return this.employeeForm?.get('salary') as FormControl;
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

  canDeactivate(): Promise<boolean> | boolean {
    return confirmUnsavedChanges(
      this.employeeForm?.dirty ?? false, //checks if the form is dirty.default value is false
      this.dialog
    );
  }
}

// canDeactivate(): Promise<boolean> | boolean {
//   return confirmUnsavedChanges(
//     this.employeeForm?.dirty ?? false, //checks if the form is dirty.default value is false
//     this.dialog,
//     'Hey, fill it before leaving!'
//   );
// }
// Without passing this.dialog, the util function has no way to open the confirmation dialog.
