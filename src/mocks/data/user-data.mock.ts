import { UserModel, UserPayload } from '@shared/interfaces/user.interface';

export const userLoggedMock: UserModel = {
  name: 'John',
  lastName: 'Doe',
  email: 'john.doe@test.com'
};

export const userObjMock: UserPayload = {
  email: 'john.doe@test.com',
  password: 'password'
};

export const newUserMock: UserPayload = {
  ...userLoggedMock,
  ...userObjMock
};

export const badUserLoggedMock: UserPayload = {
  ...userObjMock,
  password: null
};
