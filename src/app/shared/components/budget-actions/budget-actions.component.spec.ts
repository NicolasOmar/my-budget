import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// COMPONENT
import { BudgetActionsComponent } from './budget-actions.component';

describe('BudgetActionsComponent', () => {
  let component: BudgetActionsComponent;
  let fixture: ComponentFixture<BudgetActionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetActionsComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
