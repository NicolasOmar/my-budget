import { ButtonColorEnum, ButtonTypeEnum } from '@shared/enums/button.enum';

export interface ButtonConfig {
  label: string;
  color?: ButtonColorEnum;
  isFluid?: boolean;
  isTertiary?: boolean;
  type: ButtonTypeEnum;
}
