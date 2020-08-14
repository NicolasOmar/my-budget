import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
// API SERVICES
import { AuthService } from 'src/app/shared/services/auth.service';
import { Message } from '../../shared/interfaces/message.interface';
import { MessageStateEnum } from 'src/app/shared/enums/states.enum';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  public loginForm: FormGroup;
  public errorMsg: Message = null;
  public isLoading = false;

  constructor(private fb: FormBuilder, private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: this.fb.control(null, Validators.required),
      password: this.fb.control(null, [Validators.required, Validators.minLength(6)])
    });
  }

  public onSubmit(): void {
    if (this.loginForm.valid && !this.isLoading) {
      this.isLoading = true;

      this.sub = this.authService.logIn(this.loginForm.getRawValue()).subscribe(
        () => {
          this.isLoading = false;
          this.router.navigate(['/welcome']);
        },
        error => {
          this.isLoading = false;
          this.errorMsg = {
            title: 'Ops!',
            type: MessageStateEnum.ERROR,
            paragraph: [error]
          };
        }
      );
    }
  }

  public closeMessage(): void {
    this.errorMsg = null;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
