import { Component }                   from '@angular/core';
import { ServiceCommunicationService } from '../service-communication.service';

@Component({
  selector: 'app-component-three',
  template: `
    <hr/>
    <p>Component Three Counter: {{componentThreeCounter}}</p>
    <button (click)="onClick()">Plus One</button>
  `
})
export class ComponentThreeComponent {

  componentThreeCounter = 0;

  constructor(
    private serviceCommunicationService: ServiceCommunicationService
  ) {
    this.serviceCommunicationService.counterPlusOne$.subscribe(v => this.componentThreeCounter = v);
  }

  onClick = () => this.serviceCommunicationService.counterPlusOne = this.componentThreeCounter + 1;
}
