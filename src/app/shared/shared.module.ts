import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// COMPONENTS
import { BudgetMessageComponent } from './components/budget-message/budget-message.component';
import { BudgetInputComponent } from './components/budget-input/budget-input.component';
import { BudgetActionsComponent } from './components/budget-actions/budget-actions.component';

const COMPONENTS = [BudgetMessageComponent, BudgetInputComponent, BudgetActionsComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [...COMPONENTS]
})
export class SharedModule {}
