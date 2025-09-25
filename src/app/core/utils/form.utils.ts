import { FormGroup } from '@angular/forms';

export function disableControls(
  form: FormGroup,
  controls: string[] | string
): void {
  const controlList = Array.isArray(controls) ? controls : [controls];

  controlList.forEach((controlName) => {
    const control = form.get(controlName);
    if (control) {
      control.disable({ emitEvent: false }); // disables without triggering valueChanges
    }
  });
}

export function enableControls(
  form: FormGroup,
  controls: string[] | string
): void {
  const controlList = Array.isArray(controls) ? controls : [controls];

  controlList.forEach((controlName) => {
    const control = form.get(controlName);
    if (control) {
      control.enable({ emitEvent: false }); // enables without triggering valueChanges
    }
  });
}
