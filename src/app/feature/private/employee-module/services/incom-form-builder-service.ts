import { Injectable } from '@angular/core';
import { BaseFormService } from '../../../../core/services/base-form-service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class IncomeFormBuilderService extends BaseFormService {
  constructor(protected fb: FormBuilder) {
    super(fb);
  }
  buildInForm() {
    return this.buildForm({
      incomes: this.fb.array([]),
    });
  }
  createIncome(): FormGroup {
    return this.fb.group({
      frequency: [null, Validators.required],
      interval: [null, Validators.required],
      amount: [null, [Validators.required, Validators.min(1)]],
    });
  }

  get incomes(): FormArray {
    return this.form?.get('incomes') as FormArray;
  }

  addIncome(): void {
    this.incomes.push(this.createIncome());
  }

  removeIncome(index: number): void {
    this.incomes.removeAt(index);
  }
}
