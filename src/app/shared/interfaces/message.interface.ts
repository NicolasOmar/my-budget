import { MessageStateEnum } from '../enums/states.enum';

export interface Message {
  title: string,
  type: MessageStateEnum
  paragraph?: Array<string>
}