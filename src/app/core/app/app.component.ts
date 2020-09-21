import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// SERVICES
import { AuthService } from '@auth/services/auth.service';
// INTERFACES
import { UserModel } from '@shared/interfaces/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  public loggedUser: UserModel = null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.autoLogIn();

    this.sub = this.authService.loggedUser.subscribe(userResponse => {
      this.loggedUser = userResponse || null;
    });
  }

  ngOnDestroy(): void {
    this.sub && this.sub.unsubscribe();
  }
}
