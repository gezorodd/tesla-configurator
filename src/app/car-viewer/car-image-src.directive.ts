import {Directive, HostBinding, Input, OnChanges} from '@angular/core';
import {CarColor, CarModel} from "../car-catalogue/car-catalogue.model";

@Directive({
  selector: '[appCarImageSrc]',
  standalone: true
})
export class CarImageSrcDirective implements OnChanges {

  @Input()
  model!: CarModel;
  @Input()
  color!: CarColor;

  @HostBinding('src')
  src?: string;

  ngOnChanges(): void {
    this.src = `https://interstate21.com/tesla-app/images/${this.model.code}/${this.color.code}.jpg`
  }
}
