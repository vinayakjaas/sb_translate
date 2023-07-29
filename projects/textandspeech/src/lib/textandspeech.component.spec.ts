import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextandspeechComponent } from './textandspeech.component';

describe('TextandspeechComponent', () => {
  let component: TextandspeechComponent;
  let fixture: ComponentFixture<TextandspeechComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TextandspeechComponent]
    });
    fixture = TestBed.createComponent(TextandspeechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
