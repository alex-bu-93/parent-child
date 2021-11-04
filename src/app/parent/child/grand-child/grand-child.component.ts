import { ChangeDetectionStrategy, Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <hr/>
    <p>Grand Child Counter: {{grandChildCounter}}</p>
    <button (click)="grandChildCounter = grandChildCounter + 1; grandChildCounterChange.emit(grandChildCounter)">+1 Grand Child Counter</button>
  `
})
export class GrandChildComponent {

  @Input() grandChildCounter = 0;
  @Output() grandChildCounterChange = new EventEmitter<number>();

}
