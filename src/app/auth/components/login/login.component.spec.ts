import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
// COMPONENT
import { LoginComponent } from './login.component';
// MODULES
import { SharedModule } from '@shared/shared.module';
// SERVICES
import { AuthService } from '@auth/services/auth.service';
import { ErrorService } from '@shared/services/error.service';
// MOCKS
import { AuthServiceMock } from '@mocks/services/auth-service.mock';
import { userObjMock } from '@mocks/data/user-data.mock';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        HttpClientModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
      ],
      providers: [
        FormBuilder,
        {
          provider: AuthService,
          useClass: AuthServiceMock
        },
        ErrorService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should fill form data and submit changes', () => {
    component.ngOnInit();
    component.loginForm.patchValue(userObjMock);
    component.onSubmit();
    fixture.detectChanges();

    // expect(component.isLoading).toBeFalsy();
    expect(component.errorMsg).toBeNull();
  });

  it('should fire logIn function and nullify error message', () => {
    component.closeMessage();
    fixture.detectChanges();
    expect(component.errorMsg).toBeNull();
  });
});
