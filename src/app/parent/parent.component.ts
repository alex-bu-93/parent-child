import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <hr/>
    <p>Parent counter: {{parentCounter}}</p>
    <button (click)="parentCounter = parentCounter + 1">+1 Parent Counter</button>

    <!--<app-child [childCounter]="parentCounter" (childCounterChange)="parentCounter = $event"></app-child>-->
    <!--<app-child [(childCounter)]="parentCounter"></app-child>-->

    <app-child [(childCounter)]="parentCounter"></app-child>
  `
})
export class ParentComponent {

  parentCounter = 0;

}
