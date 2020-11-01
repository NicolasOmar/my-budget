import { Component, Input } from '@angular/core';

@Component({
  selector: 'budget-title',
  templateUrl: './budget-title.component.html',
  styleUrls: ['./budget-title.component.scss']
})
export class BudgetTitleComponent {
  @Input() title: string;
}
