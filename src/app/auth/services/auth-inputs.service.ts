import { Injectable } from '@angular/core';

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
}
