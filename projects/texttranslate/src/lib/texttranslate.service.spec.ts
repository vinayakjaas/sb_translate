import { TestBed } from '@angular/core/testing';

import { TexttranslateService } from './texttranslate.service';

describe('TexttranslateService', () => {
  let service: TexttranslateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TexttranslateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
