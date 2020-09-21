import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'budget-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  public signUpForm: FormGroup;
  public formInputs;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.setForm();
  }

  public onSubmit(): void {
    console.warn(this.signUpForm.getRawValue(), this.signUpForm.valid);
  }

  private setForm(): void {
    this.formInputs = {
      name: {
        icon: 'mail',
        placeholder: 'Name'
      },
      lastName: {
        icon: 'mail',
        placeholder: 'Last Name'
      },
      email: {
        icon: 'mail',
        placeholder: 'Email'
      },
      password: {
        icon: 'mail',
        placeholder: 'Password'
      }
    };

    this.signUpForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(6)]]
    });
  }
}
