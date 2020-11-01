import { TestBed } from '@angular/core/testing';

import { UserInputsService } from './user-inputs.service';

describe('UserInputsService', () => {
  let service: UserInputsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserInputsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
