import { UserResponse } from '@shared/interfaces/user.interface';
import { Observable, of } from 'rxjs';
// MOCKS
import { userLoggedMock } from './user.mock';

export class ApiUserMock {
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

  public logOut(): Observable<unknown> {
    return of(true);
  }
}
