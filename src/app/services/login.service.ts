import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginI } from '../models/login.interface';
import { ResponseI } from '../models/response.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlApi = '/api/login';

  constructor(private http: HttpClient) { }

  onLogin(form: LoginI): Observable<ResponseI>{
    const direccion = this.urlApi + '/api/login';
    return this.http.post<ResponseI>(direccion, form);
  }

}
