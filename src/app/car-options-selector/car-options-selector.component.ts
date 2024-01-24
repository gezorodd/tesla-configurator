import {Component, OnInit} from '@angular/core';
import {AsyncPipe, CurrencyPipe, NgForOf, NgIf} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CarSettingsService} from "../car-settings/car-settings.service";
import {CarSettings} from "../car-settings/car-settings.model";
import {map, NEVER, Observable, tap} from "rxjs";
import {CarConfig} from "../car-catalog/car-catalog.model";
import {CarCatalogService} from "../car-catalog/car-catalog.service";
import {CarConfigSpecPipe} from "./car-config-spec.pipe";

@Component({
  selector: 'app-car-options-selector',
  standalone: true,
  imports: [
    AsyncPipe,
    NgForOf,
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    CurrencyPipe,
    CarConfigSpecPipe
  ],
  templateUrl: './car-options-selector.component.html',
  styleUrl: './car-options-selector.component.scss'
})
export class CarOptionsSelectorComponent implements OnInit {

  readonly settings: CarSettings;
  carConfigs$: Observable<CarConfig[]>;
  includeTowHitch$: Observable<boolean>;
  includeYoke$: Observable<boolean>;

  constructor(carSettingsService: CarSettingsService, private carCatalogService: CarCatalogService) {
    this.settings = carSettingsService.settings;
    this.carConfigs$ = NEVER;
    this.includeTowHitch$ = NEVER;
    this.includeYoke$ = NEVER;
  }

  ngOnInit(): void {
    const model = this.settings.model;
    if (!model) {
      return;
    }

    const carOptions$ = this.carCatalogService.getCarOptions(model);
    this.carConfigs$ = carOptions$
      .pipe(map(carOptions => carOptions.configs));
    this.includeTowHitch$ = carOptions$
      .pipe(
        map(carOptions => carOptions.towHitch),
        tap(includeTowHitch => {
          if (!includeTowHitch) {
            this.settings.towHitchChosen = false;
          }
        })
      );
    this.includeYoke$ = carOptions$
      .pipe(
        map(carOptions => carOptions.yoke),
        tap(includeYoke => {
          if (!includeYoke) {
            this.settings.yokeChosen = false;
          }
        })
      );
  }
}
