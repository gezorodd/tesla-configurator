import {Component} from '@angular/core';
import {AsyncPipe, JsonPipe, NgIf} from '@angular/common';
import {RouterModule} from "@angular/router";
import {StepSelectorComponent} from "./step-selector/step-selector.component";
import {CarSettings} from "./car-settings/car-settings.model";
import {CarImageSrcDirective} from "./car-viewer/car-image-src.directive";
import {CarSettingsService} from "./car-settings/car-settings.service";
import {CarViewerComponent} from "./car-viewer/car-viewer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [AsyncPipe, JsonPipe, RouterModule, StepSelectorComponent, CarImageSrcDirective, NgIf, CarViewerComponent],
  templateUrl: './app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  readonly settings: CarSettings;

  constructor(carSettingsService: CarSettingsService) {
    this.settings = carSettingsService.settings;
  }
}
