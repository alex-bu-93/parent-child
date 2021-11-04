import { NgModule }                from '@angular/core';
import { CommonModule }            from '@angular/common';
import { ComponentThreeComponent } from './component-three.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComponentThreeComponent],
  exports: [ComponentThreeComponent]
})
export class ComponentThreeModule {
}
