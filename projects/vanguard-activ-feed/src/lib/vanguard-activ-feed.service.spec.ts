import { TestBed } from '@angular/core/testing';

import { VanguardActivFeedService } from './vanguard-activ-feed.service';

describe('VanguardActivFeedService', () => {
  let service: VanguardActivFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VanguardActivFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
