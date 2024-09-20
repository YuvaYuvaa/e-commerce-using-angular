import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPipe', // Updated to avoid generic name conflict
})
export class FilterPipe implements PipeTransform {
  transform(value: any[], filterString: string, propName: string): any[] {
    const result: any[] = [];
    
    if (!value || filterString === '' || propName === '') {
      return value;
    }

    value.forEach((item: any) => {
      if (item[propName]?.trim().toLowerCase().includes(filterString.toLowerCase())) {
        result.push(item);
      }
    });

    return result;
  }
}
