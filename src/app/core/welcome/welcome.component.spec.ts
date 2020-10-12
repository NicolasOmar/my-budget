import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
// MODULES
import { SharedModule } from '@shared/shared.module';
// COMPONENTS
import { WelcomeComponent } from './welcome.component';
// SERVICES
import { AuthService } from '@auth/services/auth.service';
import { ActionsService } from '@shared/services/actions.service';
// MOCKS
import { AuthServiceMock } from '@mocks/services/auth-service.mock';
import { userLoggedMock } from '@mocks/data/user-data.mock';
import { ActionsServiceMock } from '@mocks/services/actions-service.mock';

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
          useClass: AuthServiceMock
        },
        {
          provide: ActionsService,
          useClass: ActionsServiceMock
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

  it('should create the component with user name and imported modules', () => {
    const userNameTest = `${userLoggedMock.name} ${userLoggedMock.lastName}`;
    expect(component).toBeTruthy();
    expect(component.userName).toBe(userNameTest);
    expect(component.welcomeModules.length).toBe(1);
    expect(element.querySelector('budget-actions')).toBeTruthy();
    expect(element.querySelector('.label').innerHTML.trim()).toBe(userNameTest);
  });
});
