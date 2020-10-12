import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// SERVICES
import { AuthService } from '@auth/services/auth.service';
import { ActionsService } from '@shared/services/actions.service';
// INTERFACES
import { UserModel } from '@shared/interfaces/user.interface';
import { Module } from '@shared/interfaces/actions.interface';

@Component({
  selector: 'budget-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit, OnDestroy {
  private sub: Subscription = new Subscription();
  public userName: string;
  public welcomeModules: Array<Module>;

  constructor(private authService: AuthService, private actionService: ActionsService) {}

  ngOnInit(): void {
    this.setUserName();
    this.setModules();
  }

  private setUserName(): void {
    this.sub.add(
      this.authService.loggedUser.subscribe((response: UserModel) => {
        this.userName = response ? `${response.name} ${response.lastName}` : null;
      })
    );
  }

  private setModules(): void {
    this.welcomeModules = this.actionService.returnMainActions();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
