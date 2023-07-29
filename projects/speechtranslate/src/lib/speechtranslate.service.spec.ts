import { TestBed } from '@angular/core/testing';

import { SpeechtranslateService } from './speechtranslate.service';

describe('SpeechtranslateService', () => {
  let service: SpeechtranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpeechtranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
