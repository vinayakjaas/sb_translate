import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TexttranslateComponent } from './texttranslate.component';

describe('TexttranslateComponent', () => {
  let component: TexttranslateComponent;
  let fixture: ComponentFixture<TexttranslateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TexttranslateComponent]
    });
    fixture = TestBed.createComponent(TexttranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
