import { Component, Input, OnInit } from '@angular/core';
// CONSTANTS
import { numbers } from '@shared/constants/numbers.const';

@Component({
  selector: 'budget-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  @Input() contentWide = 6;

  public layoutWide = {
    content: 'eigth wide column',
    margin: 'four wide column'
  };

  ngOnInit() {
    if (typeof this.contentWide === 'number' && !(this.contentWide % 2)) {
      this.layoutWide = {
        content: `${numbers[this.contentWide]} wide column`,
        margin: `${numbers[(16 - this.contentWide) / 2]} wide column`
      };
    }
  }
}
