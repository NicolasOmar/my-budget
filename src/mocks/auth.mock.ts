import { of, BehaviorSubject, Observable } from 'rxjs';
// INTERFACES
import { UserModel } from '@auth/interfaces/user.interface';
// MOCKS
import { userLoggedMock } from './user.mock';

export class AuthMock {
  public loggedUser = new BehaviorSubject<UserModel>(userLoggedMock);
  public logIn(): Observable<{ userLogged: UserModel; token: string }> {
    return of({
      userLogged: userLoggedMock,
      token: null
    });
  }

  public autoLogIn(): Observable<null> {
    return of(null);
  }

  public clearUser(): void {
    return null;
  }
}
