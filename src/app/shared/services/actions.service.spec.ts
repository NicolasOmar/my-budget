import { TestBed } from '@angular/core/testing';
// SERVICES
import { ActionsService } from './actions.service';

describe('ActionsService', () => {
  let service: ActionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ActionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should bring main actions', () => {
    const [result] = service.returnMainActions();

    expect(result.title).toBe('Users');
    expect(result.description).toBe('Actions related to user data');
    expect(result.actions.length).toBeGreaterThan(0);
  });
});
