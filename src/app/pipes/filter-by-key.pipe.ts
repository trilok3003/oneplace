import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterByKey'
})
export class FilterByKeyPipe implements PipeTransform {

  transform(items: any[], value: any, key: string): any[] {
    if (!items) {
      return [];
    }
    if (!value) {
      return items;
    }
    if (value == '' || value == null) {
      return [];
    }
    // return items.filter(e => e[key].toLowerCase().indexOf(value) > -1 );
    return items.filter(e => e[key].toString().toLowerCase().includes(value));

    //toLocaleLowerCase
  }
}
