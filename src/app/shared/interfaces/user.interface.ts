export interface UserModel {
  name: string;
  lastName: string;
  email: string;
  token?: string;
}

export interface UserPayload {
  email: string;
  password: string;
  name?: string;
  lastName?: string;
}

export interface UserResponse {
  newUser?: UserModel;
  userLogged?: UserModel;
  token: string;
}
