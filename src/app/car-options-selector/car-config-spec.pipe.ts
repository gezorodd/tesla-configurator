import { Pipe, PipeTransform } from '@angular/core';
import {CarConfig} from "../car-catalog/car-catalog.model";

@Pipe({
  name: 'carConfigSpec',
  standalone: true
})
export class CarConfigSpecPipe implements PipeTransform {

  transform(value: CarConfig): string {
    return `Range: ${value.range} miles - Max speed: ${value.speed}`;
  }
}
