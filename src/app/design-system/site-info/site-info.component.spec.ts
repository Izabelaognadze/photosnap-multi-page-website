import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteInfoComponent } from './site-info.component';

describe('SiteInfoComponent', () => {
  let component: SiteInfoComponent;
  let fixture: ComponentFixture<SiteInfoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SiteInfoComponent]
    });
    fixture = TestBed.createComponent(SiteInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
