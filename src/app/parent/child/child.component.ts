import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <hr/>
    <p>Child Counter: {{childCounter}}</p>
    <button (click)="childCounter = childCounter + 1; childCounterChange.emit(childCounter)">+1 Child Counter</button>

    <!--<app-grand-child [grandChildCounter]="childCounter" (grandChildCounterChange)="childCounter = $event"</app-grand-child>-->
    <!--<app-grand-child [(grandChildCounter)]="childCounter" (grandChildCounterChange)="childCounterChange.emit(childCounter)"></app-grand-child>-->

    <app-grand-child [(grandChildCounter)]="childCounter"
                     (grandChildCounterChange)="childCounterChange.emit(childCounter)">
    </app-grand-child>

  `
})
export class ChildComponent {

  @Input() childCounter = 0;
  @Output() childCounterChange = new EventEmitter<number>();

}
