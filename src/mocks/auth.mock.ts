import { of, BehaviorSubject } from 'rxjs';
import { UserModel } from '@auth/interfaces/user.interface';

export const userLoggedMock: UserModel = {
  name: 'John',
  lastName: 'Doe',
  email: 'john.doe@test.com'
};

export class AuthMock {
  public loggedUser = new BehaviorSubject<UserModel>(userLoggedMock);
  public logIn() {
    return of({
      userLogged: userLoggedMock,
      token: null
    });
  }
}
