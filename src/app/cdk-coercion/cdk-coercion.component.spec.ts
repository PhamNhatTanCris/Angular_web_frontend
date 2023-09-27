import { ComponentFixture, TestBed } from '@angular/core/testing';


import { CdkCoercionComponent } from './cdk-coercion.component';

describe('CdkCoercionComponent', () => {
  let component: CdkCoercionComponent;
  let fixture: ComponentFixture<CdkCoercionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CdkCoercionComponent]
    });
    fixture = TestBed.createComponent(CdkCoercionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
