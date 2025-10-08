import { FormGroup } from '@angular/forms';

export function setFileToFormControl(
  form: FormGroup,
  controlName: string,
  files: FileList | null
) {
  if (!files) return;
  const file = files.item(0);
  if (!file) return;

  const control = form.get(controlName);
  if (!control) return;

  control.setValue(file);
}
