import { TestBed } from '@angular/core/testing';

import { ApiCoService } from './api-co.service';

describe('ApiCoService', () => {
  let service: ApiCoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
