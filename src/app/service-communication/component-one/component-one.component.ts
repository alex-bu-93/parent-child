import { Component }                   from '@angular/core';
import { ServiceCommunicationService } from '../service-communication.service';

@Component({
  selector: 'app-component-one',
  template: `
    <hr/>
    <p>Component One Counter: {{componentOneCounter}}</p>
    <button (click)="onClick()">Plus One</button>
  `
})
export class ComponentOneComponent {

  componentOneCounter = 0;

  constructor(
    private serviceCommunicationService: ServiceCommunicationService
  ) {
    this.serviceCommunicationService.counterPlusOne$.subscribe(v => this.componentOneCounter = v);
  }

  onClick = () => this.serviceCommunicationService.counterPlusOne = this.componentOneCounter + 1;
}
