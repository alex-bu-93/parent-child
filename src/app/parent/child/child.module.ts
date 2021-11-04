import { NgModule }         from '@angular/core';
import { CommonModule }     from '@angular/common';
import { ChildComponent }   from './child.component';
import { GrandChildModule } from './grand-child';

@NgModule({
  imports: [
    CommonModule,
    GrandChildModule
  ],
  declarations: [ChildComponent],
  exports: [ChildComponent]
})
export class ChildModule {
}
