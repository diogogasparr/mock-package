import { TestBed } from '@angular/core/testing';

import { MockLibService } from './mock-lib.service';

describe('MockLibService', () => {
  let service: MockLibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockLibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
