import { Injectable } from '@angular/core';
// INTERFACES
import { Module } from '@shared/interfaces/actions.interface';

@Injectable({
  providedIn: 'root'
})
export class ActionsService {
  public returnMainActions(): Array<Module> {
    return [
      {
        title: 'Users',
        description: 'Actions related to user data',
        actions: [
          {
            title: 'Change info',
            icon: 'pencil alternate'
          },
          {
            title: 'Change password',
            icon: 'lock'
          }
        ]
      }
    ];
  }
}
