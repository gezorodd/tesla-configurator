import {Component, Input} from '@angular/core';
import {CarSettings} from "../car-settings/car-settings.model";
import {CarImageSrcDirective} from "./car-image-src.directive";

@Component({
  selector: 'app-car-viewer',
  standalone: true,
  imports: [
    CarImageSrcDirective
  ],
  templateUrl: './car-viewer.component.html',
  styleUrl: './car-viewer.component.scss'
})
export class CarViewerComponent {

  @Input({required: true})
  settings!: CarSettings;
}
