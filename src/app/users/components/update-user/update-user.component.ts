import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
// SERVICES
import { UserInputsService } from '@users/services/user-inputs.service';
import { UserService } from '@users/services/user.service';

@Component({
  selector: 'budget-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit, OnDestroy {
  private sub = new Subscription();
  public title = 'Change user info';
  public updateForm: FormGroup;
  public isLoading = false;
  public formInputs;

  constructor(
    private fb: FormBuilder,
    private inputService: UserInputsService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.setForm();
  }

  public onSubmit(): void {
    console.warn('here we go');
  }

  public cancelUpdate(): void {
    console.warn('no man, not now');
  }

  private setForm(): void {
    this.formInputs = this.inputService.updateInputs;

    this.sub.add(
      this.userService.getData().subscribe(res => {
        this.updateForm = this.fb.group({
          name: [res.name, [Validators.required, Validators.minLength(3)]],
          lastName: [res.lastName, [Validators.required, Validators.minLength(3)]]
        });
      })
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
