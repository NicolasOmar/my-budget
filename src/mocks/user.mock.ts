import { UserModel, UserPayload } from '@shared/interfaces/user.interface';

export const userLoggedMock: UserModel = {
  name: 'John',
  lastName: 'Doe',
  email: 'john.doe@test.com'
};

export const userObj: UserPayload = {
  email: 'john.doe@test.com',
  password: 'password'
};
