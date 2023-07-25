import { TestBed } from '@angular/core/testing';

import { TextandspeechService } from './textandspeech.service';

describe('TextandspeechService', () => {
  let service: TextandspeechService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextandspeechService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
