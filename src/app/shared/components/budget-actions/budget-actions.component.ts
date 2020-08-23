import { Component } from '@angular/core';

@Component({
  selector: 'budget-actions',
  templateUrl: './budget-actions.component.html',
  styleUrls: ['./budget-actions.component.scss']
})
export class BudgetActionsComponent {
  public modules = [
    {
      title: 'Users',
      description: 'Actions related to user data',
      actions: [
        {
          title: 'Change info',
          icon: 'pencil alternate'
        },
        {
          title: 'Change password',
          icon: 'lock'
        }
      ]
    }
  ];
}
