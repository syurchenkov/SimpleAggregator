import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class LoginService {
  constructor(private http: Http) {

  }

  login(email: string, password: string) {
    
    let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });

    return this.http.post('/api/auth', JSON.stringify({ email: email, password: password }), { headers: headers })
      .map((response: Response) => {
        let resp = response.json();

        if (resp && resp.auth_token) {
            localStorage.setItem('currentUser', JSON.stringify(resp.user));
            localStorage.setItem('authToken', resp.auth_token);
        }

        return resp;
      });
  }
 
  logout() {
    localStorage.removeItem('currentUser');
    localStorage.removeItem('authToken');
  }
}