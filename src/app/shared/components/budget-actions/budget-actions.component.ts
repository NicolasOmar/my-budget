import { Component, Input } from '@angular/core';
// INTERFACES
import { Module } from '@shared/interfaces/actions.interface';

@Component({
  selector: 'budget-actions',
  templateUrl: './budget-actions.component.html',
  styleUrls: ['./budget-actions.component.scss']
})
export class BudgetActionsComponent {
  @Input() modules: Array<Module> = [];
}
