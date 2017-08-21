import { Routes } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/login/login.component';
import { ServicesComponent } from './containers/services/services.component';

export const routes: Routes = [
{ path: '', component: HomeComponent },
{ path: 'login', component: LoginComponent },
{ path: 'services', component: ServicesComponent }
]