import { Injectable } from '@angular/core';
import { BaseFormService } from '../../../../core/services/base-form-service';
import { Employee } from '../model/employee-model';
import { Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class EmployeeFormBuilderService extends BaseFormService {
  buildEmployeeForm(config?: Employee): void {
    this.buildForm({
      name: [(config?.name ?? '').toString(), Validators.required],
      department: [(config?.department ?? '').toString(), Validators.required],
      role: [(config?.role ?? '').toString(), Validators.required],
      salary: [(config?.salary ?? '').toString(), Validators.required],
      joiningDate: [
        config?.joiningDate ? new Date(config.joiningDate) : null,
        Validators.required,
      ],
    });
  }
}
