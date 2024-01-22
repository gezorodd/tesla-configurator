import {CarColor, CarConfig, CarModel} from "../car-catalog/car-catalog.model";

export class CarSettings {
  static readonly OPTION_COST = 1000;

  private _model?: CarModel;
  color?: CarColor;
  config?: CarConfig;
  towHitchChosen: boolean;
  yokeChosen: boolean;

  constructor() {
    this.towHitchChosen = false;
    this.yokeChosen = false;
  }

  get model(): CarModel | undefined {
    return this._model;
  }

  set model(value: CarModel | undefined) {
    this._model = value;
    this.color = this._model?.colors[0];
    this.config = undefined;
  }

  hasModelSelected(): boolean {
    return !!this._model;
  }

  hasConfigSelected(): boolean {
    return !!this.config;
  }

  computeTotalCost(): number {
    if (!this.config || !this.color) {
      throw new Error("Missing required config or color to compute the total cost");
    }
    let totalCost = this.config.price + this.color.price;
    if (this.towHitchChosen) {
      totalCost += CarSettings.OPTION_COST;
    }
    if (this.yokeChosen) {
      totalCost += CarSettings.OPTION_COST;
    }
    return totalCost;
  }
}

