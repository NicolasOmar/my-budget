import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import * as CryptoJS from 'crypto-js';
// ENVIRONMENT
import { environment } from 'src/environments/environment';
// API SERVICES
import { ApiUserService } from '@shared/api/api-user.service';
// INTERFACES
import { UserPayload, UserModel, UserResponse } from '@shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public loggedUser = new BehaviorSubject<UserModel>(null);

  constructor(private apiUserService: ApiUserService) {}

  public logIn(user: UserPayload): Observable<UserResponse> {
    user = {
      ...user,
      password: this.encryptPass(user.password)
    };

    return this.apiUserService.logIn(user).pipe(
      tap((response: UserResponse) => {
        this.handleLogin(response);
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

  public signUp(user: UserPayload): Observable<UserResponse> {
    user = {
      ...user,
      password: this.encryptPass(user.password)
    };

    return this.apiUserService.signUp(user).pipe(
      tap((response: UserResponse) => {
        this.handleLogin(response);
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

  public setLocalUser(userData: UserModel | null): void {
    userData
      ? localStorage.setItem('userData', JSON.stringify(userData))
      : localStorage.removeItem('userData');
  }

  public getLocalUser(): UserModel | null {
    return JSON.parse(localStorage.getItem('userData'));
  }

  private handleLogin(response: UserResponse): void {
    const formedObj = {
      ...(response.newUser || response.userLogged),
      token: response.token
    };

    this.setLocalUser(formedObj);
    this.loggedUser.next(formedObj);
  }

  private encryptPass(pass: string): string {
    return pass
      ? CryptoJS[environment.CRYPT_METH].encrypt(pass, environment.CRYPT_SECRET).toString()
      : null;
  }
}
