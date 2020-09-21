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
  private subs: Subscription[] = [];
  public userName: string = null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.subs.push(
      this.authService.loggedUser.subscribe((response: UserModel) => {
        this.userName = response ? `${response.name} ${response.lastName}` : null;
      })
    );
  }

  public onLogout(): void {
    this.subs.push(
      this.authService.logOut().subscribe(() => {
        this.authService.clearUser();
        this.router.navigate(['/auth']);
      })
    );
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
