import { Injectable } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup } from '@angular/forms';
import { disableControls, enableControls } from '../utils/form.utils';

@Injectable({
  providedIn: 'root',
})
export abstract class BaseFormService {
  #formGroup?: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  get form(): FormGroup | undefined {
    return this.#formGroup;
  }

  set form(formGroup: FormGroup | undefined) {
    this.#formGroup = formGroup;
  }

  reset(): void {
    this.form?.reset();
  }

  //In short, options lets you apply rules or behaviors to the whole form, not just individual fields.
  //   examples:
  //   buildForm({
  //   password: ['', Validators.required],
  //   confirmPassword: ['', Validators.required]
  // }, {
  //   validators: this.passwordMatchValidator,
  //   updateOn: 'blur'
  // });

  buildForm<T extends object>(
    config: T,
    options?: AbstractControlOptions | null
  ): FormGroup {
    this.form = this.formBuilder.group(config, options);
    return this.form;
  }

  applyTouchAndDirtyToForm(): void {
    this.form?.markAllAsTouched();
    this.form?.markAsDirty();
  }

  resetForm(): void {
    this.form = new FormGroup({});
  }

  disableControls(controls: string[] | string): void {
    if (!this.form) {
      return;
    }
    disableControls(this.form, controls);
  }

  enableControls(controls: string[] | string): void {
    if (!this.form) {
      return;
    }
    enableControls(this.form, controls);
  }
}
