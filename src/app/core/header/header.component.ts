import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
// SERVICES
import { AuthService } from '@auth/services/auth.service';
// INTERFACES
import { UserModel } from '@shared/interfaces/user.interface';

@Component({
  selector: 'budget-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private sub = new Subscription();
  public headerTitle = 'MyBudget | Angular';
  public userName: string = null;

  constructor(public router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.initUser();
  }

  public onLogout(): void {
    this.sub.add(
      this.authService.logOut().subscribe(() => {
        this.authService.clearUser();
        this.router.navigate(['/auth']);
      })
    );
  }

  private initUser(): void {
    this.sub.add(
      this.authService.loggedUser.subscribe((response: UserModel) => {
        this.userName = response ? `${response.name} ${response.lastName}` : null;
      })
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
