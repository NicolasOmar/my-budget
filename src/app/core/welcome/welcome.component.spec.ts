import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
// MODULES
import { SharedModule } from '@shared/shared.module';
// COMPONENTS
import { WelcomeComponent } from './welcome.component';
// SERVICES
import { AuthService } from '@auth/services/auth.service';
// MOCKS
import { AuthMock, userLoggedMock } from '@mocks/auth.mock';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;
  let element: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      imports: [HttpClientModule, RouterTestingModule, SharedModule],
      providers: [
        {
          provide: AuthService,
          useClass: AuthMock
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    element = fixture.nativeElement;
    fixture.detectChanges();
  });

  it('should create with user name data', () => {
    const userNameTest = `${userLoggedMock.name} ${userLoggedMock.lastName}`;
    expect(component).toBeTruthy();
    expect(component.userName).toBe(userNameTest)
    expect(element.querySelector('budget-actions')).toBeTruthy();
    expect(element.querySelector('.label').innerHTML.trim()).toBe(userNameTest)
  });
});
