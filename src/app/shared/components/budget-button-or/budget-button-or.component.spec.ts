import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetButtonOrComponent } from './budget-button-or.component';

describe('BudgetButtonOrComponent', () => {
  let component: BudgetButtonOrComponent;
  let fixture: ComponentFixture<BudgetButtonOrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetButtonOrComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetButtonOrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
