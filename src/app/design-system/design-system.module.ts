import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ArrowButtonComponent } from './arrow-button/arrow-button.component';
import { SiteInfoComponent } from './site-info/site-info.component';
import { BetaSectionComponent } from './beta-section/beta-section.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { StorySectionComponent } from './story-section/story-section.component';
import { StoryMainContentComponent } from './story-main-content/story-main-content.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ArrowButtonComponent,
    SiteInfoComponent,
    BetaSectionComponent,
    HeroSectionComponent,
    StorySectionComponent,
    StoryMainContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    ArrowButtonComponent,
    SiteInfoComponent,
    BetaSectionComponent,
    HeroSectionComponent,
    StorySectionComponent,
    StoryMainContentComponent,
  ]
})
export class DesignSystemModule { }
