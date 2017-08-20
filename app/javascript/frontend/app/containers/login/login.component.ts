import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { LoginService } from '../../services/login.service';
import { User } from '../users/user';

import template from './login.component.html';

@Component({
  selector: 'app-login',
  template: template,
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  user: User = {
    email: '',
    password: ''
  };

  loading = false;

  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private loginService: LoginService) { }

  ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }


  login() {
    this.loading = true;
    this.loginService.login(this.user.email, this.user.password)
      .subscribe(
        data => {
            this.router.navigate([this.returnUrl]);
        },
        error => {
            this.loading = false;
        });
  }
}