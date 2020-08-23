import { Injectable } from '@angular/core';
// INTERFACES
import { Message } from '../interfaces/message.interface';
// ENUMS
import { MessageStateEnum } from '../enums/states.enum';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {
  public sendObj(errorMsg: string): Message {
    return {
      title: 'Ups!',
      type: MessageStateEnum.ERROR,
      paragraph: [errorMsg]
    };
  }
}
