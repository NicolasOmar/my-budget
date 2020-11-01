import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'budget-button-or',
  templateUrl: './budget-button-or.component.html',
  styleUrls: ['./budget-button-or.component.scss']
})
export class BudgetButtonOrComponent {
  @Output() clickFirst = new EventEmitter<void>();
  @Output() clickSecond = new EventEmitter<void>();

  public onClickFirst(): void {
    this.clickFirst.emit();
  }

  public onClickSecond(): void {
    this.clickSecond.emit();
  }
}
