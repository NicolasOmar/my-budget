import { Observable, of } from 'rxjs';
// INTERFACES
import { UserModel } from '@shared/interfaces/user.interface';
// MOCKS
import { userLoggedMock } from '@mocks/data/user-data.mock';

export class UserServiceMock {
  public getData(): Observable<UserModel> {
    return of(userLoggedMock);
  }

  public updateUser(): Observable<UserModel> {
    return of(userLoggedMock);
  }
}
