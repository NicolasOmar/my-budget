import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ButtonConfig } from '@shared/interfaces/button.interface';

@Component({
  selector: 'budget-button',
  templateUrl: './budget-button.component.html',
  styleUrls: ['./budget-button.component.scss']
})
export class BudgetButtonComponent {
  @Input() config: ButtonConfig;
  @Input() disable: boolean;
  @Output() sendClick = new EventEmitter<void>();

  public onClick() {
    this.sendClick.emit();
  }
}
