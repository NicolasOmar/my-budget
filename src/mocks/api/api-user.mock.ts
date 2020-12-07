import { Observable, of, throwError } from 'rxjs';
// INTERFACES
import {
  UserModel,
  UserPayload,
  UserResponse,
  UserUpdatePayload
} from '@shared/interfaces/user.interface';
// MOCKS
import { userLoggedMock } from '../data/user-data.mock';
import { errorMsgMock } from '../data/messages-data.mock';

export class ApiUserMock {
  public logIn(userObj: UserPayload): Observable<UserResponse> {
    return userObj.password
      ? of({
          userLogged: userLoggedMock,
          token: null
        })
      : throwError(errorMsgMock.login);
  }

  public logOut(): Observable<unknown> {
    return of(true);
  }

  public signUp(userObj: UserPayload): Observable<UserResponse> {
    return userObj.password
      ? of({
          newUser: userLoggedMock,
          token: null
        })
      : throwError(errorMsgMock.signUp);
  }

  public getUser(): Observable<UserModel> {
    return of(userLoggedMock);
  }

  public updateUser(newUserData: UserUpdatePayload): Observable<UserModel> {
    return of(userLoggedMock);
  }
}
