import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetMessageComponent } from './budget-message.component';
// ENUMS
import { MessageStateEnum } from '@shared/enums/states.enum';

xdescribe('BudgetMessageComponent', () => {
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
    const errorType = MessageStateEnum.ERROR;
    component.message = {
      title: 'test',
      type: errorType
    };

    expect(component).toBeTruthy();
  });
});
