import { Component }                   from '@angular/core';
import { ServiceCommunicationService } from '../service-communication.service';

@Component({
  selector: 'app-component-two',
  template: `
    <hr/>
    <p>Component Two Counter: {{componentTeoCounter}}</p>
    <button (click)="onClick()">Plus One</button>
  `
})
export class ComponentTwoComponent {

  componentTeoCounter = 0;

  constructor(
    private serviceCommunicationService: ServiceCommunicationService
  ) {
    this.serviceCommunicationService.counterPlusOne$.subscribe(v => this.componentTeoCounter = v);
  }

  onClick = () => this.serviceCommunicationService.counterPlusOne = this.componentTeoCounter + 1;
}
