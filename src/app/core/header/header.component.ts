import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
// SERVICES
import { AuthService } from 'src/app/shared/services/auth.service';
// INTERFACES
import { UserModel } from 'src/app/shared/interfaces/user.interface';

@Component({
  selector: 'budget-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private subs: Subscription[] = [];
  public userName: string = null;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit() {
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

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
