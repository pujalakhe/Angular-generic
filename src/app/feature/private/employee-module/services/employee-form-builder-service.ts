import { Injectable } from '@angular/core';
import { BaseFormService } from '../../../../core/services/base-form-service';
import { Employee } from '../model/employee-model';
import { Validators } from '@angular/forms';
import { fileValidator } from '../../../../shared/custom-validators/file.validators';
import {
  IMAGE_FILE_TYPE,
  MAX_IMAGE_SIZE,
  MAX_PDF_SIZE,
  OTHER_FILE_TYPE,
} from '../../../../core/constants/messages';

@Injectable({
  providedIn: 'root',
})
export class EmployeeFormBuilderService extends BaseFormService {
  buildEmployeeForm(config?: Employee): void {
    this.buildForm({
      name: [(config?.name ?? '').toString(), Validators.required],
      department: [(config?.department ?? '').toString(), Validators.required],
      role: [(config?.role ?? '').toString(), Validators.required],
      salary: [
        (config?.salary ?? '').toString(),
        [Validators.required, Validators.min(100)],
      ],
      joiningDate: [
        config?.joiningDate ? new Date(config.joiningDate) : null,
        Validators.required,
      ],
      photo: [
        config?.photo ?? null,
        [fileValidator(MAX_IMAGE_SIZE, IMAGE_FILE_TYPE)],
      ],
      cv: [config?.cv ?? null, [fileValidator(MAX_PDF_SIZE, OTHER_FILE_TYPE)]],
    });
  }
}
