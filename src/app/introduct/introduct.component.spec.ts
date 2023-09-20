import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroductComponent } from './introduct.component';

describe('IntroductComponent', () => {
  let component: IntroductComponent;
  let fixture: ComponentFixture<IntroductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IntroductComponent]
    });
    fixture = TestBed.createComponent(IntroductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
