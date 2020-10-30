import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ButtonTypeEnum } from '@shared/enums/button.enum';

import { BudgetButtonComponent } from './budget-button.component';

describe('BudgetButtonComponent', () => {
  let component: BudgetButtonComponent;
  let fixture: ComponentFixture<BudgetButtonComponent>;

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
