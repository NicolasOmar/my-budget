// INTERFACES
import { Module } from '@shared/interfaces/actions.interface';

export const WelcomeModulesMock: Array<Module> = [
  {
    title: 'Users',
    description: 'Actions related to user data',
    actions: [
      {
        title: 'Change info',
        icon: 'pencil alternate',
        path: ['/users/update']
      },
      {
        title: 'Change password',
        icon: 'lock'
      }
    ]
  }
];
