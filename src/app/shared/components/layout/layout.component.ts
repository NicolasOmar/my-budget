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

  public layoutConfig = {
    content: 'six wide column',
    margin: 'five wide column'
  };

  ngOnInit(): void {
    this.setLayoutConfig();
  }

  private setLayoutConfig(): void {
    if (typeof this.contentWide === 'number' && !(this.contentWide % 2)) {
      this.layoutConfig = {
        content: `${numbers[this.contentWide]} wide column`,
        margin: `${numbers[(16 - this.contentWide) / 2]} wide column`
      };
    }
  }
}
