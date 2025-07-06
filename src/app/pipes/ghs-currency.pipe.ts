import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ghsCurrency',
  standalone: true,
})
export class GhsCurrencyPipe implements PipeTransform {
  transform(value: number | string): string {
    if (value === null || value === undefined || value === '') return '';
    const num = typeof value === 'string' ? parseFloat(value) : value;
    if (isNaN(num)) return '';
    return new Intl.NumberFormat('en-GH', {
      style: 'currency',
      currency: 'GHS',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })
      .format(num)
      .replace('GHS', 'GHS');
  }
}
