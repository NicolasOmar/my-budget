import { Injectable } from '@angular/core';
import {
  CanActivate,
  CanActivateChild,
  ActivatedRouteSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { take, map } from 'rxjs/operators';
// SERVICES
import { AuthService } from '@auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.loggedUser.pipe(
      take(1),
      map(user => {
        return !!user
          ? this.isAuthPath(route.url[0].path)
            ? this.router.createUrlTree(['welcome'])
            : true
          : this.isAuthPath(route.url[0].path)
          ? true
          : this.router.createUrlTree(['auth']);
      })
    );
  }

  canActivateChild(
    route: ActivatedRouteSnapshot
  ): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.canActivate(route);
  }

  private isAuthPath(path) {
    return path === 'auth';
  }
}
