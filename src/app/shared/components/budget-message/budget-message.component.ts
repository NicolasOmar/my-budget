import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
// INTERFACES
import { Message } from '../../interfaces/message.interface';
// ENUMS
import { MessageStateEnum } from '../../enums/states.enum';

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
    switch(this.message.type) {
      case MessageStateEnum.ERROR:
        this.messageStyle = 'negative';
        break;
      case MessageStateEnum.SUCCESS:
        this.messageStyle = 'success';
        break;
      default:
        break;
    }
  }

  public onCloseClick() {
    this.onClose.emit()
  }
}
