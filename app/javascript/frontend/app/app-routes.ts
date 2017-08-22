import { Routes } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/login/login.component';
import { ServicesComponent } from './containers/services/services.component';
import { CarServicesComponent } from './containers/car-services/car-services.component';

export const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'services', component: ServicesComponent },
{ path: 'car_services', component: CarServicesComponent }
]