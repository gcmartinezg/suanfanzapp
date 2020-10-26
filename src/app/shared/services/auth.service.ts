import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserI } from '../interfaces/UserI';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user: UserI | undefined;

  constructor(
    private httpClient: HttpClient
  ) { }

  loginMail(user: UserI):Observable<any> {
    // const passKey = "suanfanzon";
    // if (user.contrasena === passKey) {
    //   this.user = user;
    //   window.localStorage.setItem('user', JSON.stringify(this.user));
    // }
    return this.httpClient.post(environment.url_api+'user/login-mail', user);
  }

  loginPhone(user: UserI):Observable<any> {
    // const passKey = "suanfanzon";
    // if (user.contrasena === passKey) {
    //   this.user = user;
    //   window.localStorage.setItem('user', JSON.stringify(this.user));
    // }
    return this.httpClient.post(environment.url_api+'user/login-phone', user);
  }

  isLogged() {
    const user = window.localStorage.getItem('user') || undefined;
    const isLogged = user ? true : false;
    if (isLogged) this.user = JSON.parse(user);
    return isLogged;
  }

  logout() {
    window.localStorage.clear();
    window.location.href = '';
  }
}
