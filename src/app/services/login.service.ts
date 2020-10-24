import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginI } from '../modules/login.interface';
import { UsersI } from '../modules/users.interface';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private urlApi = 'http://217.76.158.200:8181/';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
    console.log('service ready');
  }

  onLogin(form: LoginI): Observable<UsersI>{
    const direccion = this.urlApi +  'api/login' ;
    return this.http.post<UsersI>(direccion, form);
  }

}
