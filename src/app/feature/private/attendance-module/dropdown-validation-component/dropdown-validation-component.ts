import { Component } from '@angular/core';
import { EmployeeFormBuilderService } from '../../employee-module/services/employee-form-builder-service';
import { Form, FormArray, FormControl, FormGroup } from '@angular/forms';
import { IncomeFormBuilderService } from '../../employee-module/services/income-form-builder-service';

type OptionType = { value: number | string; label: string };

@Component({
  selector: 'app-dropdown-validation-component',
  standalone: false,
  templateUrl: './dropdown-validation-component.html',
  styleUrl: './dropdown-validation-component.scss',
})
export class DropdownValidationComponent {
  form: FormGroup | undefined;

  constructor(private incomeFormService: IncomeFormBuilderService) {}

  readonly frequencyOptions: OptionType[] = [
    { value: 1, label: '1' },
    { value: 2, label: '2' },
    { value: 3, label: '3' },
    { value: 4, label: '4' },
    { value: 5, label: '5' },
  ];

  readonly intervalOptions: OptionType[] = [
    { value: 'Daily', label: 'Daily' },
    { value: 'Weekly', label: 'Weekly' },
    { value: 'Monthly', label: 'Monthly' },
    { value: 'Quarterly', label: 'Quarterly' },
    { value: 'Yearly', label: 'Yearly' },
  ];

  ngOnInit() {
    this.form = this.incomeFormService.buildInForm();
  }

  get incomes(): FormArray {
    return this.incomeFormService.incomes;
  }

  get amount(): FormControl {
    console.log(this.incomes.get('amount'));

    return this.incomes.get('amount') as FormControl;
  }

  getIncomeErrorMessage(index: number): string | null {
    const error = this.incomes.errors?.['invalidIncomeHierarchy'];

    if (error) {
      // Check if this index is the invalid one or the conflicting one
      if (error.invalidIndex === index) {
        return error.message;
      }

      // Optionally highlight the conflicting income too
      if (error.conflictingIndex === index) {
        return 'This income conflicts with another entry';
      }
    }

    return null;
  }

  getArrayControl(index: number, controlName: string): FormControl {
    return this.incomes.at(index).get(controlName) as FormControl;
  }

  addIncome(): void {
    this.incomeFormService.addIncome();
  }

  removeIncome(index: number): void {
    this.incomeFormService.removeIncome(index);
  }

  private getSelectedValues<T>(
    controlName: string,
    excludeIndex?: number
  ): T[] {
    const selected: T[] = [];
    this.incomes.controls.forEach((control, index) => {
      if (index !== excludeIndex) {
        const value = control.get(controlName)?.value;
        if (value !== null && value !== undefined && value !== '') {
          selected.push(value);
        }
      }
    });
    return selected;
  }

  private getAvailableOptions<T extends number | string>(
    allOptions: OptionType[],
    selectedValues: T[]
  ): OptionType[] {
    return allOptions.filter(
      (option) => !selectedValues.includes(option.value as T)
    );
  }

  getAvailableFrequencyOptions(index: number): OptionType[] {
    const selectedFrequencies = this.getSelectedValues<number>(
      'frequency',
      index
    );
    return this.getAvailableOptions(this.frequencyOptions, selectedFrequencies);
  }

  getAvailableIntervalOptions(index: number): OptionType[] {
    const selectedIntervals = this.getSelectedValues<string>('interval', index);
    return this.getAvailableOptions(this.intervalOptions, selectedIntervals);
  }

  submit() {
    if (this.form?.invalid) {
      this.form.markAllAsTouched();
    } else {
      console.log(this.form?.value);
    }
  }
}
