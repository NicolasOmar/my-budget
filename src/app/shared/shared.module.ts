import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
// COMPONENTS
import { BudgetMessageComponent } from './components/budget-message/budget-message.component';
import { BudgetInputComponent } from './components/budget-input/budget-input.component';
import { BudgetActionsComponent } from './components/budget-actions/budget-actions.component';
import { LayoutComponent } from './components/layout/layout.component';
import { BudgetButtonComponent } from './components/budget-button/budget-button.component';

const COMPONENTS = [
  BudgetMessageComponent,
  BudgetInputComponent,
  BudgetActionsComponent,
  LayoutComponent,
  BudgetButtonComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [...COMPONENTS]
})
export class SharedModule {}
