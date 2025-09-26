import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nepaliCurrency',
})
export class NepaliCurrencyPipe implements PipeTransform {
  transform(value: number | string): string {
    if (value == null) return '';

    // Ensure number
    let amount = typeof value === 'string' ? parseFloat(value) : value;

    if (isNaN(amount)) return '';

    // Split integer and decimal parts
    let [intPart, decPart] = amount.toFixed(2).split('.');

    // Format integer part with Indian commas
    let lastThree = intPart.slice(-3);
    let otherNumbers = intPart.slice(0, -3);
    if (otherNumbers !== '') {
      lastThree = ',' + lastThree;
      otherNumbers = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',');
    }
    let formatted = otherNumbers + lastThree;

    return 'Rs ' + formatted + '.' + decPart;
  }
}
