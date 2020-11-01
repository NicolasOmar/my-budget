import { ButtonColorEnum, ButtonTypeEnum } from '@shared/enums/button.enum';

export interface ButtonConfig {
  label: string;
  color?: ButtonColorEnum;
  isFluid?: boolean;
  isSecondary?: boolean;
  isTertiary?: boolean;
  type: ButtonTypeEnum;
}
