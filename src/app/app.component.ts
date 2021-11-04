import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="container">
      <div class="row">
        <div class="col-lg my-5">
          <h6>Parent-Child-GrandChild communication:</h6>
          <app-parent></app-parent>
        </div>
        <div class="col-lg my-5">
          <h6>Components communication via common service:</h6>
          <app-service-communication></app-service-communication>
        </div>
      </div>
    </div>`
})
export class AppComponent {
}
