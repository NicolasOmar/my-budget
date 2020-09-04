import { TestBed } from '@angular/core/testing';
import { ApiUserService } from './api-user.service';
import { HttpClientModule } from '@angular/common/http';

describe('ApiUserService', () => {
  let service: ApiUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(ApiUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
