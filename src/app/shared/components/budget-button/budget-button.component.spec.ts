import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
// COMPONENT
import { BudgetButtonComponent } from './budget-button.component';
// ENUMS
import { ButtonTypeEnum } from '@shared/enums/button.enum';

describe('BudgetButtonComponent', () => {
  let component: BudgetButtonComponent;
  let fixture: ComponentFixture<BudgetButtonComponent>;
  let buttonEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetButtonComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetButtonComponent);
    component = fixture.componentInstance;
    component.config = {
      label: 'test',
      isFluid: true,
      isTertiary: false,
      type: ButtonTypeEnum.submit
    };
    buttonEl = fixture.debugElement.query(By.css('.ui'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check that button click method has been called after been called', () => {
    const spyOnClickMethod = spyOn(component, 'onClick');
    buttonEl.nativeElement.dispatchEvent(new Event('click'));
    expect(spyOnClickMethod).toHaveBeenCalled();
  });

  it('should check that button output method has been called after been called', () => {
    const spyOnEmitter = spyOn(component.sendClick, 'emit');
    buttonEl.nativeElement.dispatchEvent(new Event('click'));
    expect(spyOnEmitter).toHaveBeenCalled();
  });
});
