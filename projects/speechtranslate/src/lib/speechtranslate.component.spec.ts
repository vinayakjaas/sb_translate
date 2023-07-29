import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeechtranslateComponent } from './speechtranslate.component';

describe('SpeechtranslateComponent', () => {
  let component: SpeechtranslateComponent;
  let fixture: ComponentFixture<SpeechtranslateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpeechtranslateComponent]
    });
    fixture = TestBed.createComponent(SpeechtranslateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
