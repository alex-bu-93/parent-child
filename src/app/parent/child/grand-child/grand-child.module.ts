import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GrandChildComponent } from './grand-child.component';



@NgModule({
  declarations: [
    GrandChildComponent
  ],
  exports: [
    GrandChildComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GrandChildModule { }
