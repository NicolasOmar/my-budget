import { Injectable } from '@angular/core';
// INTERFACES
import { Message } from '../interfaces/message.interface';
// ENUMS
import { MessageStateEnum } from '../enums/states.enum';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public sendObj(errorMsg: string, type: MessageStateEnum): Message {
    const title = type === MessageStateEnum.ERROR ? 'Ups!' : 'Great!';
    return {
      title,
      type,
      paragraph: [errorMsg]
    };
  }
}
