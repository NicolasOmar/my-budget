import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// COMPONENT
import { BudgetActionsComponent } from './budget-actions.component';
// MOCKS
import { WelcomeModulesMock } from '@mocks/data/modules-data.mock';

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

  it('should create the component', () => {
    expect(component).toBeTruthy();
    expect(component.modules).toBeTruthy();
    expect(component.modules.length).toBe(0);
  });

  it('should hold information when is inserted', () => {
    component.modules = WelcomeModulesMock;
    expect(component.modules.length).toBe(WelcomeModulesMock.length);

    component.modules.forEach((module, i) => {
      expect(module.actions.length).toBe(WelcomeModulesMock[i].actions.length);
    });
  });
});
