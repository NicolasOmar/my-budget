import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// COMPONENTS
import { BudgetMessageComponent } from './components/budget-message/budget-message.component';
import { BudgetInputComponent } from './components/budget-input/budget-input.component';

@NgModule({
  declarations: [
    BudgetMessageComponent,
    BudgetInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    BudgetMessageComponent,
    BudgetInputComponent
  ]
})
export class SharedModule { }
