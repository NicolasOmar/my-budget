import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BudgetMessageComponent } from './budget-message.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
// MOCKS
import { badMessage, goodMessage } from '@mocks/messages.mock';

describe('BudgetMessageComponent', () => {
  let component: BudgetMessageComponent;
  let fixture: ComponentFixture<BudgetMessageComponent>;
  let titleEl: DebugElement;
  let buttonEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BudgetMessageComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetMessageComponent);
    titleEl = fixture.debugElement.query(By.css('.header'));
    buttonEl = fixture.debugElement.query(By.css('.close'));
    component = fixture.componentInstance;
  });

  it('should be created with a positive message', () => {
    component.message = badMessage;
    fixture.detectChanges();

    expect(titleEl.nativeElement.innerHTML).toBe(component.message.title);
    expect(component.messageStyle).toBe('negative');
  });

  it('should be created with a negative message', () => {
    component.message = goodMessage;
    fixture.detectChanges();

    expect(titleEl.nativeElement.innerHTML).toBe(component.message.title);
    expect(component.messageStyle).toBe('success');
    component.onClose.subscribe(done => {
      done();
    });
  });

  it('should react when close button gets clicked', () => {
    component.message = goodMessage;
    fixture.detectChanges();

    spyOn(component.onClose, 'emit');
    buttonEl.nativeElement.dispatchEvent(new Event('click'));
    fixture.detectChanges();

    expect(component.onClose.emit).toHaveBeenCalled();
  });
});
