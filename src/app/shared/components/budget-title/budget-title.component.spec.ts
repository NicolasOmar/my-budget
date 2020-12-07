import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetTitleComponent } from './budget-title.component';

describe('BudgetTitleComponent', () => {
  let component: BudgetTitleComponent;
  let fixture: ComponentFixture<BudgetTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetTitleComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
