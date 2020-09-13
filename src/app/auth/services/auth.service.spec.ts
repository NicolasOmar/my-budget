import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { HttpClientModule } from '@angular/common/http';
import { ApiUserService } from '@api/api-user.service';
import { ApiUserMock } from '@mocks/api-user.mock';
import { userObj, userLoggedMock } from '@mocks/user.mock';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [
        {
          provide: ApiUserService,
          useClass: ApiUserMock
        }
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should fire clearUser function', () => {
    expect(service.clearUser()).toBeUndefined();
  });

  it('should fire autoLogIn function', () => {
    expect(service.autoLogIn()).toBeUndefined();
  });

  it('should fire logIn function and have a logged user', done => {
    service.logIn(userObj).subscribe(res => {
      expect(res.userLogged).toBe(userLoggedMock);
      done();
    });
  });

  it('should fire logOut function and return a not null response', done => {
    service.logOut().subscribe(res => {
      expect(res).toBeTruthy();
      done();
    });
  });
});
