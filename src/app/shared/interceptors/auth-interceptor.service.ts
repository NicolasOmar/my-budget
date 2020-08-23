import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';
import { take, exhaustMap } from 'rxjs/operators';
// SERVICES
import { AuthService } from '@auth/services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<any> {
    return this.authService.loggedUser.pipe(
      take(1),
      exhaustMap(user => {
        const modifiedRequest = user
          ? request.clone({
              headers: new HttpHeaders().set('Authorization', `Bearer ${user.token}`)
            })
          : request;
        return next.handle(modifiedRequest);
      })
    );
  }
}
