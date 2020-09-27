import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
// SERVICES
import { AuthService } from '@auth/services/auth.service';

@Component({
  selector: 'budget-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit, OnDestroy {
  private sub = new Subscription();
  public signUpForm: FormGroup;
  public formInputs;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.setForm();
  }

  public onSubmit(): void {
    const formData = this.signUpForm.getRawValue();

    this.sub.add(
      this.authService.signUp(formData).subscribe(
        () => this.router.navigate(['/welcome']),
        error => console.error(error)
      )
    );
  }

  private setForm(): void {
    this.formInputs = {
      name: {
        icon: 'address book',
        placeholder: 'Name'
      },
      lastName: {
        icon: 'address book',
        placeholder: 'Last Name'
      },
      email: {
        icon: 'mail',
        placeholder: 'Email'
      },
      password: {
        icon: 'key',
        placeholder: 'Password',
        type: 'password'
      }
    };

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
