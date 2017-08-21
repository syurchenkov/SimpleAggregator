import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './containers/home/home.component';
import { LoginComponent } from './containers/login/login.component';
import { LoginService } from './services/login.service';
import { ServicesComponent } from './containers/services/services.component';
import { ServicesService } from './services/services.service';
import { routes } from './app-routes';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
  { provide: APP_BASE_HREF, useValue: '/' },
  LoginService,
  ServicesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
