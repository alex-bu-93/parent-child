import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-service-communication',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <app-component-one class="d-block"></app-component-one>
    <app-component-two class="d-block"></app-component-two>
    <app-component-three class="d-block"></app-component-three>
  `
})
export class ServiceCommunicationComponent {
}
