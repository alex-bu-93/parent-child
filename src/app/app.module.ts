import { NgModule }                   from '@angular/core';
import { BrowserModule }              from '@angular/platform-browser';
import { ParentModule }               from './parent';
import { AppComponent }               from './app.component';
import { ServiceCommunicationModule } from './service-communication';

@NgModule({
  imports: [
    BrowserModule,
    ParentModule,
    ServiceCommunicationModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
