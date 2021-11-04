import { NgModule }                      from '@angular/core';
import { CommonModule }                  from '@angular/common';
import { ServiceCommunicationComponent } from './service-communication.component';
import { ComponentOneModule }            from './component-one';
import { ComponentTwoModule }            from './component-two';
import { ComponentThreeModule }          from './component-three';

@NgModule({
  imports: [
    CommonModule,
    ComponentOneModule,
    ComponentTwoModule,
    ComponentThreeModule
  ],
  declarations: [ServiceCommunicationComponent],
  exports: [ServiceCommunicationComponent]
})
export class ServiceCommunicationModule {
}
