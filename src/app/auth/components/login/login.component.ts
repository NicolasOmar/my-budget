import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
// SERVICES
import { AuthService } from '@auth/services/auth.service';
import { ErrorService } from '@shared/services/error.service';
import { AuthInputsService } from '@auth/services/auth-inputs.service';
// INTERFACES
import { Message } from '@shared/interfaces/message.interface';

@Component({
  selector: 'budget-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private sub = new Subscription();
  public loginForm: FormGroup;
  public errorMsg: Message = null;
  public isLoading = false;
  public signUpLink = ['sign-up'];
  public title = 'Welcome to MyBudget | Angular';
  public formInputs;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private inputService: AuthInputsService,
    private errorService: ErrorService
  ) {}

  ngOnInit(): void {
    this.setForm();
  }

  public onSubmit(): void {
    this.isLoading = true;

    this.sub.add(
      this.authService.logIn(this.loginForm.getRawValue()).subscribe(
        () => {
          this.isLoading = false;
          this.router.navigate(['/welcome']);
        },
        error => {
          this.isLoading = false;
          this.errorMsg = this.errorService.sendObj(error);
        }
      )
    );
  }

  public closeMessage(): void {
    this.errorMsg = null;
  }

  private setForm(): void {
    this.formInputs = this.inputService.loginInputs;

    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
