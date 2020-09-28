import { TestBed } from '@angular/core/testing';
// SERVICES
import { AuthInputsService } from './auth-inputs.service';

describe('AuthInputsService', () => {
  let service: AuthInputsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthInputsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
