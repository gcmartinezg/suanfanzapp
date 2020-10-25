import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserI } from 'src/app/shared/interfaces/UserI';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string = 'http://localhost:5000/';

  constructor(
    private httpClient: HttpClient
  ) { }

  save(user: UserI):Observable<any>{
    return this.httpClient.post(this.url+'user',  user);
  }
}
