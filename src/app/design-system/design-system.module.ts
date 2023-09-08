import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ArrowButtonComponent } from './arrow-button/arrow-button.component';
import { SiteInfoComponent } from './site-info/site-info.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ArrowButtonComponent,
    SiteInfoComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    ArrowButtonComponent,
    SiteInfoComponent,
  ]
})
export class DesignSystemModule { }
