import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
// INTERFACES
import { UserPayload } from '@auth/interfaces/user.interface';
// ENUMS
import { ErrorEnum } from '@shared/enums/errors.enum';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  constructor(private http: HttpClient) {}

  public logIn(user: UserPayload): Observable<unknown> {
    return this.http.post(`${environment.API_URL}/users/login`, user).pipe(
      catchError(error => throwError(this.parseError(error))),
      tap(response => response)
    );
  }

  public logOut(): Observable<unknown> {
    return this.http.post(`${environment.API_URL}/users/logoutAll`, {}).pipe(
      catchError(error => throwError(this.parseError(error))),
      tap(response => response)
    );
  }

  private parseError(error: HttpErrorResponse): HttpErrorResponse | string {
    switch (error.status) {
      case 0:
        return ErrorEnum.NO_SERVER;
      default:
        return error.error.message;
    }
  }
}
