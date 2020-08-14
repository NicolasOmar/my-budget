import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { ErrorEnum } from '../shared/enums/errors.enum';

interface UserPayload {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  constructor(private http: HttpClient) {}

  public logIn(user: UserPayload) {
    return this.http.post(`${environment.API_URL}/users/login`, user).pipe(
      catchError(error => throwError(this.parseError(error))),
      tap(response => response)
    );
  }

  private parseError(error: HttpErrorResponse): HttpErrorResponse | string {
    console.error(error);
    switch (error.status) {
      case 0:
        return ErrorEnum.NO_SERVER;
      default:
        return error.error;
    }
  }
}
