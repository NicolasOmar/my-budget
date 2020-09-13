import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
// SERVICE
import { AuthService } from '@auth/services/auth.service';
// MOCKS
import { AuthMock } from '@mocks/auth.mock';
import { userLoggedMock } from '@mocks/user.mock';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;
  let logoutEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [
        {
          provide: AuthService,
          useClass: AuthMock
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    logoutEl = fixture.debugElement.query(By.css('.log-out'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should be initiated and have a logged user name', () => {
    const userNameMock = `${userLoggedMock.name} ${userLoggedMock.lastName}`;

    component.ngOnInit();
    fixture.detectChanges();
    expect(component.userName).toBe(userNameMock);
  });

  it('should fire log out function user', () => {
    spyOn(component, 'onLogout');
    logoutEl.nativeElement.dispatchEvent(new Event('click'));
    expect(component.onLogout).toHaveBeenCalled();
  });
});
