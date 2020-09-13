import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
// SERVICES
import { AuthService } from '@auth/services/auth.service';
import { AuthMock } from '@mocks/auth.mock';
import { userLoggedMock } from '@mocks/user.mock';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [HttpClientModule, RouterTestingModule],
      providers: [
        {
          provide: AuthService,
          useClass: AuthMock
        }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should initiate the app start autologin', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    app.ngOnInit();
    expect(app.loggedUser).toBe(userLoggedMock);
    app.ngOnDestroy();
  });
});
