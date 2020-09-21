import { Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, NgControl } from '@angular/forms';
import { InputConfig } from '@shared/interfaces/inputs.interface';

@Component({
  selector: 'budget-input',
  templateUrl: './budget-input.component.html',
  styleUrls: ['./budget-input.component.scss']
})
export class BudgetInputComponent implements ControlValueAccessor, OnInit {
  @Input() config: InputConfig;

  public divClass: string;
  public _value: string | number;
  public onChanged;
  public onTouched;

  constructor(@Self() @Optional() public control: NgControl) {
    this.control && (this.control.valueAccessor = this);
  }

  ngOnInit(): void {
    this.divClass = this.config.icon ? 'ui left icon input' : 'ui left input';
  }

  public onInput(value: string | number): void {
    this.onChanged(value);
    this.onTouched();
  }

  public writeValue(val) {
    this._value = val;
  }

  public registerOnChange(fn: any) {
    this.onChanged = fn;
  }

  public registerOnTouched(fn: any) {
    this.onTouched = fn;
  }

  public get invalid(): boolean {
    return this.control ? this.control.invalid && this.control.touched : false;
  }
}
