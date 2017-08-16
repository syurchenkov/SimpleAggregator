import { Routes } from '@angular/router';

import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/login/login.component';

export const routes: Routes = [
{ path: '', pathMatch: 'full', redirectTo: 'home' }, 
{ path: 'home', component: HomeComponent },
{ path: 'login', component: LoginComponent }
]