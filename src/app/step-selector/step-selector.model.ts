import {CarSettings} from "../car-settings/car-settings.model";

export class Step {
  readonly stepNumber: number;
  readonly routeLink: string;
  readonly canActivate: CanActivateStep;

  constructor(stepNumber: number, routeLink: string, canActivate: CanActivateStep) {
    this.stepNumber = stepNumber;
    this.routeLink = routeLink;
    this.canActivate = canActivate;
  }
}

declare type CanActivateStep = (settings: CarSettings) => boolean;
