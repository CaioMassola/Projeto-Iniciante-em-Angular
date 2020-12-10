import { TestBed } from '@angular/core/testing';

import { DiretivasNgIfService } from './diretivas-ng-if.service';

describe('DiretivasNgIfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DiretivasNgIfService = TestBed.get(DiretivasNgIfService);
    expect(service).toBeTruthy();
  });
});
