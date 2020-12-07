import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
// COMPONENTS
import { UpdateUserComponent } from './update-user.component';
// ROUTES
import { mainRoutes } from 'src/app/app-routing.module';
// MODULES
import { SharedModule } from '@shared/shared.module';
// SERVICES
import { UserService } from '@users/services/user.service';
// ENUMS
import { MessageStateEnum } from '@shared/enums/states.enum';
// MOCKS
import { UserServiceMock } from '@mocks/services/user-service.mock';
import { userLoggedMock } from '@mocks/data/user-data.mock';

describe('UpdateUserComponent', () => {
  let component: UpdateUserComponent;
  let fixture: ComponentFixture<UpdateUserComponent>;
  let router: Router;
  let location: Location;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUserComponent],
      imports: [
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        RouterTestingModule.withRoutes(mainRoutes),
        SharedModule
      ],
      providers: [
        {
          provide: UserService,
          useClass: UserServiceMock
        }
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should change return a seccess message after update with form data', () => {
    component.updateForm.patchValue({
      ...userLoggedMock
    });
    component.onSubmit();
    fixture.detectChanges();

    expect(component.isLoading).toBeFalsy();
    expect(component.message).toBeTruthy();
    expect(component.message.type).toBe(MessageStateEnum.SUCCESS);
  });

  it('should cancel the message after call the cancel button', () => {
    component.cancelUpdate();
    fixture.detectChanges();

    expect(location.path()).toBe('');
  });

  it('should nullify the message after you click the close button', () => {
    component.closeMessage();
    fixture.detectChanges();

    expect(component.message).toBeNull();
  });
});
