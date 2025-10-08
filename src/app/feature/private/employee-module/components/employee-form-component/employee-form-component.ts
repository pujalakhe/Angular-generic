import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Employee } from '../../model/employee-model';
import { EmployeeFormBuilderService } from '../../services/employee-form-builder-service';
import { MatDialog } from '@angular/material/dialog';
import { confirmUnsavedChanges } from '../../../../../core/utils/form.utils';
import { HttpClient } from '@angular/common/http';
import { setFileToFormControl } from '../../../../../shared/utils/file-upload.utils';

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
  uploadedFiles: string[] = [];
  employeeForm?: FormGroup;

  constructor(
    private employeeFormBuilderService: EmployeeFormBuilderService,
    private dialog: MatDialog,
    private httpClient: HttpClient
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

  get photo(): FormControl {
    return this.employeeForm?.get('photo') as FormControl;
  }

  get cv(): FormControl {
    return this.employeeForm?.get('cv') as FormControl;
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

  uploadEmployeePhoto(files: FileList | null) {
    if (this.employeeForm) {
      setFileToFormControl(this.employeeForm, 'photo', files);
    }
  }

  uploadEmployeeCV(files: FileList | null) {
    if (this.employeeForm) {
      setFileToFormControl(this.employeeForm, 'cv', files);
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
