import { Component, OnInit } from '@angular/core';
// SERVICES
import { ActionsService } from '@shared/services/actions.service';
// INTERFACES
import { Module } from '@shared/interfaces/actions.interface';

@Component({
  selector: 'budget-actions',
  templateUrl: './budget-actions.component.html',
  styleUrls: ['./budget-actions.component.scss']
})
export class BudgetActionsComponent implements OnInit{
  public modules: Array<Module>;

  constructor(
    private actionService: ActionsService
  ) {}

  ngOnInit() {
    this.modules = this.actionService.returnMainActions();
  }
}
