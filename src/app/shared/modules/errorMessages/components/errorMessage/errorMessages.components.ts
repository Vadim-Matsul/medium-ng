import { Component, Input } from '@angular/core';

@Component({
  selector: 'ma-error-message',
  template: `
    <div class="alert alert-danger">
      <i class="ion-alert-circled alert-dismissible"></i>
      <strong>{{ errorMessageProps }}</strong>
    </div>
  `,
})
export class ErrorMessageComponent {
  @Input('errorMessage') errorMessageProps?: string = 'Something went wrong';
}
