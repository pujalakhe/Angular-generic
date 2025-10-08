import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function fileValidator(
  maxSize: number,
  allowedTypes: string[]
): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const file = control.value as File | null;

    if (!file) return null;

    if (!allowedTypes.includes(file.type)) {
      return { invalidFileType: true };
    }

    if (file.size > maxSize) {
      return { maxSizeExceeded: true };
    }

    return null; // valid
  };
}
