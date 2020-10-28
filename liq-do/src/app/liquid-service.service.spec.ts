import { TestBed } from '@angular/core/testing';

import { LiquidServiceService } from './liquid-service.service';

describe('DuhLiquidServiceService', () => {
  let service: LiquidServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LiquidServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
