import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryMainContentComponent } from './story-main-content.component';

describe('StoryMainContentComponent', () => {
  let component: StoryMainContentComponent;
  let fixture: ComponentFixture<StoryMainContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoryMainContentComponent]
    });
    fixture = TestBed.createComponent(StoryMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
