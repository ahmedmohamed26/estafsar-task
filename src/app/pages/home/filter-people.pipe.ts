import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPeople'
})
export class FilterPeoplePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!value) return null;
    if (!args) return value;

    args = args.toLowerCase();

    return value.filter((people) => {
      return JSON.stringify(people).toLowerCase().includes(args);
    });


  }

}
