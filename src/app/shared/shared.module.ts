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
import { BudgetButtonOrComponent } from './components/budget-button-or/budget-button-or.component';
import { BudgetTitleComponent } from './components/budget-title/budget-title.component';

const COMPONENTS = [
  BudgetMessageComponent,
  BudgetInputComponent,
  BudgetActionsComponent,
  LayoutComponent,
  BudgetButtonComponent,
  BudgetButtonOrComponent,
  BudgetTitleComponent
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterModule],
  exports: [...COMPONENTS]
})
export class SharedModule {}
