import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// API SERVICES
import { ApiUserService } from '@api/api-user.service';
// INTERFACES
import { UserPayload, UserModel, UserResponse } from '@auth/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedUser = new BehaviorSubject<UserModel>(null);

  constructor(private apiUserService: ApiUserService) {}

  public logIn(user: UserPayload): Observable<UserResponse> {
    return this.apiUserService.logIn(user).pipe(
      tap((response: UserResponse) => {
        const formedObj = {
          ...response.userLogged,
          token: response.token
        };

        this.setLocalUser(formedObj);
        this.loggedUser.next(formedObj);
      })
    );
  }

  public logOut(): Observable<boolean> {
    return this.apiUserService.logOut().pipe(
      tap((response: boolean) => {
        this.setLocalUser(null);
        return response;
      })
    );
  }

  public clearUser(): void {
    this.loggedUser.next(null);
  }

  public autoLogIn(): void {
    const userData: UserModel = this.getLocalUser();
    if (userData) {
      this.loggedUser.next(userData);
    }
  }

  private setLocalUser(userData: UserModel | null): void {
    userData
      ? localStorage.setItem('userData', JSON.stringify(userData))
      : localStorage.removeItem('userData');
  }

  private getLocalUser(): UserModel | null {
    return JSON.parse(localStorage.getItem('userData'));
  }
}
