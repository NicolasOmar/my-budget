import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
// SERVICES
import { AuthService } from '@auth/services/auth.service';
import { AuthInputsService } from '@auth/services/auth-inputs.service';
import { MessageService } from '@shared/services/message.service';
// INTERFACES
import { Message } from '@shared/interfaces/message.interface';
// ENUMS
import { MessageStateEnum } from '@shared/enums/states.enum';

@Component({
  selector: 'budget-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  private sub = new Subscription();
  public signUpForm: FormGroup;
  public errorMsg: Message = null;
  public isLoading = false;
  public signUpLink = ['/'];
  public title = 'Sign up a new User';
  public formInputs;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private inputService: AuthInputsService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.setForm();
  }

  public onSubmit(): void {
    const formData = this.signUpForm.getRawValue();
    this.isLoading = true;

    this.sub.add(
      this.authService.signUp(formData).subscribe(
        () => {
          this.isLoading = false;
          this.router.navigate(['/welcome']);
        },
        error => {
          this.isLoading = false;
          this.errorMsg = this.messageService.sendObj(error, MessageStateEnum.ERROR);
        }
      )
    );
  }

  public closeMessage(): void {
    this.errorMsg = null;
  }

  private setForm(): void {
    this.formInputs = this.inputService.signUpInputs;

    this.signUpForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
