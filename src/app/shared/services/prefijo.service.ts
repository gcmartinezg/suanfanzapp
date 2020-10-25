import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrefijoService {

  private url: string = 'http://localhost:5000/';

  constructor(
    private httpClient: HttpClient
  ) { }

  getAll(): Observable<any>{
    return this.httpClient.get(this.url+'prefijo');
  }
}
