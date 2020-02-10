import { TestBed } from '@angular/core/testing';

import { UserVisitService } from './user-visit.service';

describe('UserVisitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserVisitService = TestBed.get(UserVisitService);
    expect(service).toBeTruthy();
  });
});
