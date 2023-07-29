import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechTranslationComponent } from './speech-translation.component';

describe('SpeechTranslationComponent', () => {
  let component: SpeechTranslationComponent;
  let fixture: ComponentFixture<SpeechTranslationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeechTranslationComponent]
    });
    fixture = TestBed.createComponent(SpeechTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
