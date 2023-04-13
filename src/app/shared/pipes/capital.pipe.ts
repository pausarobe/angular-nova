import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'capital'
})
export class CapitalPipe implements PipeTransform {
  transform(value: string) {
    if (value && value[0] === 'A') {
      return `${value} Capital`;
    }
    return value;
  }
}