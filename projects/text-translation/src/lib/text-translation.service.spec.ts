import { TestBed } from '@angular/core/testing';

import { TextTranslationService } from './text-translation.service';

describe('TextTranslationService', () => {
  let service: TextTranslationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextTranslationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
