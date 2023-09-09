import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetaSectionComponent } from './beta-section.component';

describe('BetaSectionComponent', () => {
  let component: BetaSectionComponent;
  let fixture: ComponentFixture<BetaSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BetaSectionComponent]
    });
    fixture = TestBed.createComponent(BetaSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
