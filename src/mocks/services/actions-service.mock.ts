// INTERFACES
import { Module } from '@shared/interfaces/actions.interface';
// MOCKS
import { WelcomeModulesMock } from '@mocks/data/modules-data.mock';

export class ActionsServiceMock {
  public returnMainActions(): Array<Module> {
    return WelcomeModulesMock;
  }
}
