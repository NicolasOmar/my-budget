import { of, BehaviorSubject } from 'rxjs';
import { UserResponse, UserModel } from '@auth/interfaces/user.interface';

const userLoggedConst: UserModel = {
  name: 'John',
  lastName: 'Doe',
  email: 'john.doe@test.com'
};

export class MockAuthService {
  public loggedUser = new BehaviorSubject<UserModel>(userLoggedConst);
  public logIn() {
    return of({
      userLogged: userLoggedConst,
      token: null
    });
  }
}
