import { MessageStateEnum } from '@shared/enums/states.enum';

export const badMessage = {
  title: 'test',
  type: MessageStateEnum.ERROR,
  paragraph: []
};

export const goodMessage = {
  title: 'test',
  type: MessageStateEnum.SUCCESS,
  paragraph: []
};
