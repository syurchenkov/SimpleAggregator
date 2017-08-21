import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { Service } from '../containers/services/service';

import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ServicesService {
  private servicesUrl = 'api/services';

  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {

  }

  getServices(): Promise<Service[]> {
    return this.http.get(this.servicesUrl)
      .toPromise()
      .then(response => response.json().data as Service[])
      .catch(this.handleError);
  }

  create(name: string): Promise<Service> {
    return this.http
      .post(this.servicesUrl, JSON.stringify({name: name}), {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Service)
      .catch(this.handleError);
  }

   delete(id: number): Promise<void> {
    const url = `${this.servicesUrl}/${id}`;
    return this.http.delete(url, {headers: this.headers})
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}