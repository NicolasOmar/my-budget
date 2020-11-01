import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
// SERVICES
import { ApiUserService } from '@shared/api/api-user.service';
import { AuthService } from '@auth/services/auth.service';
// INTERFACES
import { UserModel, UserUpdatePayload } from '@shared/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apiUserService: ApiUserService, private authService: AuthService) {}

  public getData(): Observable<UserModel> {
    return this.apiUserService.getUser();
  }

  public updateUser(newUserData: UserUpdatePayload): Observable<UserModel> {
    return this.apiUserService.updateUser(newUserData).pipe(
      tap((updatedUser: UserModel) => {
        updatedUser = {
          ...this.authService.getLocalUser(),
          ...updatedUser
        };
        this.authService.setLocalUser(updatedUser);
        this.authService.autoLogIn();
      })
    );
  }
}
