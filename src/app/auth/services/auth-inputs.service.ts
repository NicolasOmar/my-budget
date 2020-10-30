import { Injectable } from '@angular/core';
// INTERFACES
import { ButtonConfig } from '@shared/interfaces/button.interface';
// ENUMS
import { ButtonColorEnum, ButtonTypeEnum } from '@shared/enums/button.enum';

@Injectable({
  providedIn: 'root'
})
export class AuthInputsService {
  public signUpInputs = {
    name: {
      icon: 'address book',
      placeholder: 'Name'
    },
    lastName: {
      icon: 'address book',
      placeholder: 'Last Name'
    },
    email: {
      icon: 'mail',
      placeholder: 'Email'
    },
    password: {
      icon: 'key',
      placeholder: 'Password',
      type: 'password'
    }
  };

  public loginInputs = {
    email: {
      icon: 'mail',
      placeholder: 'Email',
      type: 'email'
    },
    password: {
      icon: 'key',
      placeholder: 'Password',
      type: 'password'
    }
  };

  public loginButton: ButtonConfig = {
    label: 'Login',
    isFluid: true,
    type: ButtonTypeEnum.submit
  };

  public signUpButton: ButtonConfig = {
    label: 'Or you can Sign up',
    color: ButtonColorEnum.violet,
    isTertiary: true,
    isFluid: true,
    type: ButtonTypeEnum.button
  };
}
