import { Component, Input, type OnChanges } from '@angular/core';

import { type BackendErrorsModel } from 'src/app/shared/models/backendErrors.model';

@Component({
  selector: 'ma-error-messages',
  templateUrl: './errorMessages.components.html',
  styleUrls: ['./errorMessages.components.scss'],
})
export class ErrorMessagesComponent implements OnChanges {
  @Input('errorMessages') errorMessagesProps: BackendErrorsModel | null;
  errorMessages: string[];

  ngOnChanges(): void {
    if (!this.errorMessagesProps) return;

    this.errorMessages = Object.keys(this.errorMessagesProps).map((key) => {
      const messages = this.errorMessagesProps![key].join(', ');
      return `${key}: ${messages}`;
    });
  }
}
