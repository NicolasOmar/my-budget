import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

interface UserData {
  email: string,
  password: string
}

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  constructor(
    private http: HttpClient
  ) { }

  public logIn(user: UserData) {
    return this.http.post(`${environment.API_URL}/users/login`, user)
  }
}
