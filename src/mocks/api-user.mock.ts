import { Observable, of } from 'rxjs';
// MOCKS
import { userLoggedMock } from './user.mock';

export class ApiUserMock {
  public logIn(): Observable<unknown> {
    return of({
      userLogged: userLoggedMock,
      token: null
    });
  }

  public logOut(): Observable<unknown> {
    return of(true);
  }
}
