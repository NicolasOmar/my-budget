import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
// SERVICES
import { UserInputsService } from '@users/services/user-inputs.service';
import { UserService } from '@users/services/user.service';
import { MessageService } from '@shared/services/message.service';
// INTERFACES
import { Message } from '@shared/interfaces/message.interface';
// ENUMS
import { MessageStateEnum } from '@shared/enums/states.enum';

@Component({
  selector: 'budget-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit, OnDestroy {
  private sub = new Subscription();
  private baseUser;
  public title = 'Change user info';
  public updateForm: FormGroup;
  public isLoading = false;
  public hasChanges = false;
  public message: Message = null;
  public formInputs;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private messageService: MessageService,
    private inputService: UserInputsService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.setForm();
    this.thereAreChanges();
  }

  public onSubmit(): void {
    this.isLoading = true;

    const formData = this.updateForm.getRawValue();
    let newObj = {};

    Object.entries(formData)
      .filter(([key]) => formData[key] !== this.baseUser[key])
      .forEach(([key, value]) => {
        newObj = { ...newObj, [key]: value };
      });

    this.sub.add(
      this.userService.updateUser(newObj).subscribe(
        ({ name, lastName }) => {
          this.message = this.messageService.sendObj(
            'Your data has been updated',
            MessageStateEnum.SUCCESS
          );
          this.baseUser = { name, lastName };
          this.hasChanges = false;
          this.isLoading = false;
        },
        error => {
          this.message = this.messageService.sendObj(error, MessageStateEnum.ERROR);
          this.isLoading = false;
        }
      )
    );
  }

  public cancelUpdate(): void {
    this.router.navigate(['/welcome']);
  }

  public closeMessage(): void {
    this.message = null;
  }

  private setForm(): void {
    this.formInputs = this.inputService.updateInputs;

    this.updateForm = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3)]],
      lastName: [null, [Validators.required, Validators.minLength(3)]]
    });

    this.setFormData();
  }

  private setFormData(): void {
    this.isLoading = true;

    this.sub.add(
      this.userService.getData().subscribe(({ name, lastName }) => {
        this.updateForm.patchValue({ name, lastName });

        this.baseUser = { name, lastName };
        this.isLoading = false;
      })
    );
  }

  private thereAreChanges(): void {
    this.sub.add(
      this.updateForm.valueChanges.subscribe(formData => {
        this.hasChanges =
          this.baseUser &&
          !!Object.keys(formData).find(key => formData[key] !== this.baseUser[key]);
      })
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
