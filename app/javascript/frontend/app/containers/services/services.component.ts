import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { ServicesService } from '../../services/services.service';
import { Service } from './service'


import template from './services.component.html';

@Component({
  selector: 'app-services',
  template: template,
  providers: [ServicesService]
})
export class ServicesComponent implements OnInit {
  services: Service[];

  constructor(private servicesService: ServicesService) { }

  ngOnInit() {
     this.getServices();
  }

  getServices(): void {
    this.servicesService.getServices().then(services => this.services = services);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.servicesService.create(name)
      .then(service => {
        this.services.push(service);
      });
  }

  delete(service: Service): void {
    this.servicesService
      .delete(service.id)
      .then(() => {
        this.services = this.services.filter(s => s !== service);
      });
  }
}