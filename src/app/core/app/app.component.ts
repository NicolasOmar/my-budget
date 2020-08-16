import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// SERVICES
import { AuthService } from 'src/app/shared/services/auth.service';
// INTERFACES
import { UserModel } from 'src/app/shared/interfaces/user.interface';

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
      if (userResponse) {
        this.loggedUser = userResponse;
      }
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
