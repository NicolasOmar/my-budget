import { Injectable } from '@angular/core';
import { ApiUserService } from '@shared/api/api-user.service';
import { UserModel } from '@shared/interfaces/user.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private apiUserService: ApiUserService) {}

  public getData(): Observable<UserModel> {
    return this.apiUserService.getUser();
  }
}
