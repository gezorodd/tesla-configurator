import {Router, Routes} from '@angular/router';
import {CarModelSelectorComponent} from "./car-model-selector/car-model-selector.component";
import {CarOptionsSelectorComponent} from "./car-options-selector/car-options-selector.component";
import {CarSummaryComponent} from "./car-summary/car-summary.component";
import {inject} from "@angular/core";
import {CarSettingsService} from "./car-settings/car-settings.service";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'models',
    pathMatch: 'full'
  },
  {
    path: 'models',
    component: CarModelSelectorComponent
  },
  {
    path: 'options',
    component: CarOptionsSelectorComponent,
    canActivate: [() => inject(CarSettingsService).settings.hasModelAndColorSelected() || inject(Router).parseUrl('models')]
  },
  {
    path: 'summary',
    component: CarSummaryComponent,
    canActivate: [() => {
      const settings = inject(CarSettingsService).settings;
      const router = inject(Router);
      if (!settings.hasModelAndColorSelected()) {
        return router.parseUrl('models');
      }
      if (!settings.hasConfigSelected()) {
        return router.parseUrl('options');
      }
      return true;
    }]
  }
];
