import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
// SERVICES
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'budget-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  private sub: Subscription;
  public userName: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.sub = this.authService.loggedUser.subscribe(
      ({ name, lastName }) => (this.userName = `${name} ${lastName}`)
    );
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
