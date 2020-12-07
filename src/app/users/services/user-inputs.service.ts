import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserInputsService {
  public updateInputs = {
    name: {
      icon: 'address book',
      placeholder: 'Name'
    },
    lastName: {
      icon: 'address book',
      placeholder: 'Last Name'
    }
  };
}
