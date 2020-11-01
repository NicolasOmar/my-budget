import { async, ComponentFixture, TestBed } from '@angular/core/testing';
// COMPONENT
import { UpdateUserComponent } from './update-user.component';
// MODULES
import { SharedModule } from '@shared/shared.module';

describe('UpdateUserComponent', () => {
  let component: UpdateUserComponent;
  let fixture: ComponentFixture<UpdateUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UpdateUserComponent],
      imports: [SharedModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
