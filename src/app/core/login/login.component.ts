import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router'
// API SERVICES
import { ApiUserService } from 'src/app/api/api-user.service';;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public errorMsg = null

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private apiUserService: ApiUserService
  ) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      email: this.fb.control(null, Validators.required),
      password: this.fb.control(null, Validators.required)
    })
  }

  public onSubmit() {
    if (this.loginForm.valid) {
      this.apiUserService.logIn(this.loginForm.getRawValue())
      .subscribe(
        result => this.router.navigate(['/welcome']),
        error => this.errorMsg = error
      )
    }
  }
}
