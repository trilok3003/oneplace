import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'generic'
})
export class GenericPipe implements PipeTransform {

  transform(func: Function, ...args): string {
    return func(...args)
  }

}
