import { HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
// MODULES
import { SharedModule } from '@shared/shared.module';
// COMPONENTS
import { SignUpComponent } from './sign-up.component';
// SERVICES
import { AuthService } from '@auth/services/auth.service';
import { ErrorService } from '@shared/services/error.service';
// MOCKS
import { AuthMock } from '@mocks/services/auth.mock';
import { formInputs } from '@mocks/data/sign-up.mock';
import { newUserMock } from '@mocks/data/user.mock';

describe('SignUpComponent', () => {
  let component: SignUpComponent;
  let fixture: ComponentFixture<SignUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SignUpComponent],
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
          useClass: AuthMock
        },
        ErrorService
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignUpComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    component.formInputs = formInputs;
    fixture.detectChanges();

    expect(component).toBeTruthy();
  });

  it('should fill form data and submit changes', () => {
    component.ngOnInit();
    component.signUpForm.patchValue(newUserMock);
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
