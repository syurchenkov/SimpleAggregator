import { Component, OnInit } from '@angular/core';

import { CarService } from './car-service';
import { CarServicesService } from '../../services/car-services.service';

import template from './car-services.component.html';
 
@Component({
  selector: 'app-car-services',
  template: template
})
export class CarServicesComponent implements OnInit {
  carServices: CarService[];

  constructor(private carServicesService: CarServicesService) {}

  ngOnInit() {
    this.getCarServices();
  }

  getCarServices(): void {
    this.carServicesService.getCarServices().then(carServices => this.carServices = carServices);
  }

}