import { Observable, of, throwError } from 'rxjs';
// INTERFACES
import { UserPayload, UserResponse } from '@shared/interfaces/user.interface';
// MOCKS
import { userLoggedMock } from '../data/user.mock';
import { errorMsgMock } from '../data/messages.mock';

export class ApiUserMock {
  public logIn(userObj: UserPayload): Observable<UserResponse> {
    return userObj.password
      ? of({
          userLogged: userLoggedMock,
          token: null
        })
      : throwError(errorMsgMock.login);
  }

  public signUp(userObj: UserPayload): Observable<UserResponse> {
    return userObj.password
      ? of({
          newUser: userLoggedMock,
          token: null
        })
      : throwError(errorMsgMock.signUp);
  }

  public logOut(): Observable<unknown> {
    return of(true);
  }
}
