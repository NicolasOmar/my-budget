import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
// SERVICES
import { AuthService } from './auth.service';
import { ApiUserService } from '@shared/api/api-user.service';
// MOCKS
import { ApiUserMock } from '@mocks/api/api-user.mock';
import {
  userObjMock,
  userLoggedMock,
  newUserMock,
  badUserLoggedMock
} from '@mocks/data/user-data.mock';
import { errorMsgMock } from '@mocks/data/messages-data.mock';

describe('AuthService >', () => {
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

  describe('HAPPY PATH >', () => {
    it('should be created', () => {
      expect(service).toBeTruthy();
    });

    it('should fire clearUser function', done => {
      service.clearUser();
      service.loggedUser.subscribe(res => {
        expect(res).toBeNull();
      });

      done();
    });

    it('should fire autoLogIn function', () => {
      expect(service.autoLogIn()).toBeUndefined();
    });

    it('should fire logIn function and have a logged user', done => {
      service.logIn(userObjMock).subscribe(res => {
        expect(res.userLogged).toBe(userLoggedMock);

        service.loggedUser.subscribe(res => {
          expect(res).toEqual({
            ...userLoggedMock,
            token: null
          });
        });

        done();
      });
    });

    it('should fire logIn function and have a logged user', done => {
      service.signUp(newUserMock).subscribe(res => {
        expect(res.newUser).toBe(userLoggedMock);

        service.loggedUser.subscribe(res => {
          expect(res).toEqual({
            ...userLoggedMock,
            token: null
          });
        });

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

  describe('SAD PATH >', () => {
    it('should return an error after trying to log in using an account without pass', done => {
      service.logIn(badUserLoggedMock).subscribe(
        () => {
          return;
        },
        (error: string) => {
          expect(error).toBe(errorMsgMock.login);
        }
      );
      done();
    });

    it('should return an error after trying to sign up using an account without pass', done => {
      service.signUp(badUserLoggedMock).subscribe(
        () => {
          return;
        },
        (error: string) => {
          expect(error).toBe(errorMsgMock.signUp);
        }
      );
      done();
    });
  });
});
