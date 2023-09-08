import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowButtonComponent } from './arrow-button.component';

describe('ArrowButtonComponent', () => {
  let component: ArrowButtonComponent;
  let fixture: ComponentFixture<ArrowButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ArrowButtonComponent]
    });
    fixture = TestBed.createComponent(ArrowButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
