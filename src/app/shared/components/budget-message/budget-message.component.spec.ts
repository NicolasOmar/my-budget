import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetMessageComponent } from './budget-message.component';

describe('BudgetMessageComponent', () => {
  let component: BudgetMessageComponent;
  let fixture: ComponentFixture<BudgetMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetMessageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
