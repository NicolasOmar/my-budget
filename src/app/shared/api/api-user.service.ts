import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { throwError, Observable } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
// INTERFACES
import {
  UserModel,
  UserPayload,
  UserResponse,
  UserUpdatePayload
} from '@shared/interfaces/user.interface';
// CONSTANTS
import { USER_ROUTES } from '@shared/constants/routes.const';
// ENUMS
import { ErrorEnum } from '@shared/enums/errors.enum';

@Injectable({
  providedIn: 'root'
})
export class ApiUserService {
  constructor(private http: HttpClient) {}

  public logIn(user: UserPayload): Observable<UserResponse> {
    return this.http.post(`${environment.API_URL}/${USER_ROUTES.LOGIN}`, user).pipe(
      catchError(error => throwError(this.parseError(error))),
      tap((response: UserResponse) => response)
    );
  }

  public logOut(): Observable<boolean> {
    return this.http.post(`${environment.API_URL}/${USER_ROUTES.LOGOUT_ALL}`, {}).pipe(
      catchError(error => throwError(this.parseError(error))),
      tap((response: boolean) => response)
    );
  }

  public signUp(user: UserPayload): Observable<UserResponse> {
    return this.http.post(`${environment.API_URL}/${USER_ROUTES.MAIN}`, user).pipe(
      catchError(error => throwError(this.parseError(error))),
      tap((response: UserResponse) => response)
    );
  }

  public getUser(): Observable<UserModel> {
    return this.http.get(`${environment.API_URL}/${USER_ROUTES.ME}`).pipe(
      catchError(error => throwError(this.parseError(error))),
      tap((response: UserModel) => response)
    );
  }

  public updateUser(newUserData: UserUpdatePayload): Observable<UserModel> {
    return this.http.patch(`${environment.API_URL}/${USER_ROUTES.ME}`, newUserData).pipe(
      catchError(error => throwError(this.parseError(error))),
      tap((response: UserModel) => response)
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
