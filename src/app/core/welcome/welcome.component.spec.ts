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
import { MockAuthService } from '@mocks/mock-auth.service';

describe('WelcomeComponent', () => {
  let component: WelcomeComponent;
  let fixture: ComponentFixture<WelcomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WelcomeComponent],
      imports: [HttpClientModule, RouterTestingModule, SharedModule],
      providers: [
        {
          provide: AuthService,
          useClass: MockAuthService
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
