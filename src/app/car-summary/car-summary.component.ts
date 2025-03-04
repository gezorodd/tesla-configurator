import {Component} from '@angular/core';
import {CarSettings} from "../car-settings/car-settings.model";
import {CarSettingsService} from "../car-settings/car-settings.service";
import {CurrencyPipe, NgIf} from "@angular/common";
import {CarConfigSpecPipe} from "../car-options-selector/car-config-spec.pipe";

@Component({
  selector: 'app-car-summary',
  standalone: true,
  imports: [
    CurrencyPipe,
    NgIf,
    CarConfigSpecPipe
  ],
  templateUrl: './car-summary.component.html',
  styleUrl: './car-summary.component.scss'
})
export class CarSummaryComponent {
  readonly settings: CarSettings;
  readonly optionCost = CarSettings.OPTION_COST;

  constructor(carSettingsService: CarSettingsService) {
    this.settings = carSettingsService.settings;
  }

  get totalCost(): number {
    return this.settings.computeTotalCost();
  }
}
