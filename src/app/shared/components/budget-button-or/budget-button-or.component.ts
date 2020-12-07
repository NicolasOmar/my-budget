import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// INTERFACES
import { ButtonConfig } from '@shared/interfaces/button.interface';
// ENUMS
import { ButtonColorEnum, ButtonTypeEnum } from '@shared/enums/button.enum';

const baseFirstButton: ButtonConfig = {
  label: 'Save',
  color: ButtonColorEnum.positive,
  type: ButtonTypeEnum.submit
};

const baseSecondButton: ButtonConfig = {
  label: 'Cancel',
  color: ButtonColorEnum.negative,
  type: ButtonTypeEnum.button
};

@Component({
  selector: 'budget-button-or',
  templateUrl: './budget-button-or.component.html',
  styleUrls: ['./budget-button-or.component.scss']
})
export class BudgetButtonOrComponent implements OnInit {
  @Input() firstButton: ButtonConfig;
  @Input() secondButton: ButtonConfig;
  @Input() disableFirst: boolean;
  @Input() disableSecond: boolean;
  @Input() orLabel = 'or';
  @Output() clickFirst = new EventEmitter<void>();
  @Output() clickSecond = new EventEmitter<void>();

  ngOnInit(): void {
    this.setButtonConfigs();
  }

  public setButtonConfigs(): void {
    this.firstButton = this.firstButton
      ? { ...baseFirstButton, ...this.firstButton }
      : { ...baseFirstButton };

    this.secondButton = this.secondButton
      ? { ...baseSecondButton, ...this.secondButton }
      : { ...baseSecondButton };
  }

  public onClickFirst(): void {
    this.clickFirst.emit();
  }

  public onClickSecond(): void {
    this.clickSecond.emit();
  }
}
