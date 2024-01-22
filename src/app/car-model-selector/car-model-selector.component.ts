import {Component} from '@angular/core';
import {CarCatalogueService} from "../car-catalogue/car-catalogue.service";
import {Observable} from "rxjs";
import {CarModel} from "../car-catalogue/car-catalogue.model";
import {AsyncPipe, NgForOf, NgIf} from "@angular/common";
import {CarSettings} from "../car-settings/car-settings.model";
import {CarSettingsService} from "../car-settings/car-settings.service";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-car-model-selector',
  standalone: true,
  imports: [
    NgForOf,
    AsyncPipe,
    FormsModule,
    NgIf
  ],
  templateUrl: './car-model-selector.component.html',
  styleUrl: './car-model-selector.component.scss'
})
export class CarModelSelectorComponent {

  readonly settings: CarSettings;
  readonly carModels$: Observable<CarModel[]>;

  constructor(carSettingsService: CarSettingsService, carCatalogueService: CarCatalogueService) {
    this.settings = carSettingsService.settings;
    this.carModels$ = carCatalogueService.getAllCarModels();
  }
}
