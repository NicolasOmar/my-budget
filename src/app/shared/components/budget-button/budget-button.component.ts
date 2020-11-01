import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ButtonColorEnum } from '@shared/enums/button.enum';
// INTERFACES;
import { ButtonConfig } from '@shared/interfaces/button.interface';

@Component({
  selector: 'budget-button',
  templateUrl: './budget-button.component.html',
  styleUrls: ['./budget-button.component.scss']
})
export class BudgetButtonComponent implements OnInit {
  @Input() config: ButtonConfig;
  @Input() disable: boolean;
  @Output() sendClick = new EventEmitter<void>();

  ngOnInit(): void {
    this.config.color = this.config.color || ButtonColorEnum.primary;
  }

  public onClick(): void {
    this.sendClick.emit();
  }
}
