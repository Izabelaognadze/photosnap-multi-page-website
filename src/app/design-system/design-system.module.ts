import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './button/button.component';
import { ArrowButtonComponent } from './arrow-button/arrow-button.component';



@NgModule({
  declarations: [
    ButtonComponent,
    ArrowButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    ButtonComponent,
    ArrowButtonComponent
  ]
})
export class DesignSystemModule { }
