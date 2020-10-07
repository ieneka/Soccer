import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Manager } from '../views/admin/Managers/managers.service';

@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private usersUrl = 'api/users';  // URL to web api
  constructor(private http: HttpClient) {
    console.log('service ready');
  }

/** GET users from the server */
getUsers(): Observable<Manager[]> {
  return this.http.get<Manager[]>(this.usersUrl)
}}
