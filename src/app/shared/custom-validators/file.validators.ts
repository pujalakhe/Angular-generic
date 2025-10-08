import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function fileValidator(
  maxSize: number,
  allowedTypes: string[]
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const file = control.value;
    if (!file) return null; // no file, valid

    // Check file size
    if (file.size > maxSize) {
      return { maxSizeExceeded: true };
    }

    // Check file type
    if (!allowedTypes.includes(file.type)) {
      return { invalidFileType: true };
    }

    return null; // valid
  };
}
