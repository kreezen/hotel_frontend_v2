import { Pipe, PipeTransform } from '@angular/core';
import { CustomerType } from '../domain/customer/customertype.enum';

@Pipe({
  name: 'customerType',
  standalone: true
})
export class CustomerTypePipe implements PipeTransform {

  transform(value: CustomerType, ...args: unknown[]): string {
    switch (value) {
      case CustomerType.BUSINESS: return 'Geschäftskunde';
      case CustomerType.PERSON: return 'Privatkunde';
      default: return '';
    }
  }
}
