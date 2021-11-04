import { NgModule }              from '@angular/core';
import { CommonModule }          from '@angular/common';
import { ComponentTwoComponent } from './component-two.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ComponentTwoComponent],
  exports: [ComponentTwoComponent]
})
export class ComponentTwoModule {
}
