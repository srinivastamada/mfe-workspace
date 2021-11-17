import { TestBed } from '@angular/core/testing';

import { EgglabsDashboardService } from './egglabs-dashboard.service';

describe('EgglabsDashboardService', () => {
  let service: EgglabsDashboardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EgglabsDashboardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
