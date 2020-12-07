import { of, BehaviorSubject, Observable } from 'rxjs';
// INTERFACES
import { UserModel, UserResponse } from '@shared/interfaces/user.interface';
// MOCKS
import { userLoggedMock } from '../data/user-data.mock';

export class AuthServiceMock {
  public loggedUser = new BehaviorSubject<UserModel>(userLoggedMock);

  public logIn(): Observable<UserResponse> {
    return of({
      userLogged: userLoggedMock,
      token: null
    });
  }

  public signUp(): Observable<UserResponse> {
    return of({
      newUser: userLoggedMock,
      token: null
    });
  }

  public autoLogIn(): Observable<null> {
    return of(null);
  }

  public clearUser(): void {
    return null;
  }

  public logOut(): Observable<boolean> {
    return of(true);
  }
}
