import { NgModule }        from '@angular/core';
import { CommonModule }    from '@angular/common';
import { ParentComponent } from './parent.component';
import { ChildModule }     from './child';

@NgModule({
  imports: [CommonModule, ChildModule],
  exports: [ParentComponent],
  declarations: [ParentComponent]
})
export class ParentModule {
}
