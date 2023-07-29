import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextAndSpeechComponent } from './text-and-speech.component';

describe('TextAndSpeechComponent', () => {
  let component: TextAndSpeechComponent;
  let fixture: ComponentFixture<TextAndSpeechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextAndSpeechComponent]
    });
    fixture = TestBed.createComponent(TextAndSpeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
