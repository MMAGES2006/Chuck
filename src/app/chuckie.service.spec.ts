import { TestBed } from '@angular/core/testing';

import { ChuckieService } from './chuckie.service';

describe('ChuckieService', () => {
  let service: ChuckieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChuckieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
