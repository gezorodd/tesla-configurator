import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable, shareReplay} from "rxjs";
import {CarModel, CarOptions} from "./car-catalogue.model";

@Injectable({
  providedIn: 'root'
})
export class CarCatalogueService {

  private carModels$?: Observable<CarModel[]>;
  private carOptionsByModelCode: Map<string, Observable<CarOptions>>;

  constructor(private http: HttpClient) {
    this.carOptionsByModelCode = new Map<string, Observable<CarOptions>>();
  }

  getAllCarModels(): Observable<CarModel[]> {
    if (!this.carModels$) {
      this.carModels$ = this.http.get<CarModel[]>('models')
        .pipe(shareReplay());
    }
    return this.carModels$;
  }

  getCarOptions(model: CarModel): Observable<CarOptions> {
    let carOptions$ = this.carOptionsByModelCode.get(model.code);
    if (!carOptions$) {
      carOptions$ = this.http.get<CarOptions>(`options/${model.code}`)
        .pipe(shareReplay());
      this.carOptionsByModelCode.set(model.code, carOptions$);
    }
    return carOptions$;
  }
}
