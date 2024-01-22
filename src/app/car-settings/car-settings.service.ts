import {Injectable} from '@angular/core';
import {CarSettings} from "./car-settings.model";

@Injectable({
  providedIn: 'root'
})
export class CarSettingsService {

  readonly settings = new CarSettings();
}
