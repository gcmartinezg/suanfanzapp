import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserI } from '../interfaces/UserI';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {

  private url: string = 'http://localhost:5000/';

  constructor(
    private httpClient: HttpClient
  ) { }

  verifyMail(user: UserI): Observable<any>{
    return this.httpClient.post(this.url+'verify-mail', user);
  }

  verifyPhone(user: UserI): Observable<any>{
    return this.httpClient.post(this.url+'verify-phone', user);
  }
}
