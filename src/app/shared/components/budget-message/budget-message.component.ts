import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// INTERFACES
import { Message } from '@shared/interfaces/message.interface';
// ENUMS
import { MessageStateEnum } from '@shared/enums/states.enum';

@Component({
  selector: 'budget-message',
  templateUrl: './budget-message.component.html',
  styleUrls: ['./budget-message.component.scss']
})
export class BudgetMessageComponent implements OnInit {
  @Output() onClose = new EventEmitter();
  @Input() message: Message;

  public messageStyle: string;

  ngOnInit(): void {
    this.setMessageStyle();
  }

  private setMessageStyle() {
    switch (this.message.type) {
      case MessageStateEnum.ERROR:
        this.messageStyle = 'negative';
        break;
      case MessageStateEnum.SUCCESS:
        this.messageStyle = 'success';
        break;
    }
  }

  public onCloseClick(): void {
    this.onClose.emit();
  }
}
