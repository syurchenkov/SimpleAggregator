import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { CarService } from '../containers/car-services/car-service';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class CarServicesService {
  private carServicesUrl = 'api/car_services';

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {

  }

  getCarServices(): Promise<CarService[]> {
    return this.http.get(this.carServicesUrl)
      .toPromise()
      .then(response => response.json().data as CarService[])
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}