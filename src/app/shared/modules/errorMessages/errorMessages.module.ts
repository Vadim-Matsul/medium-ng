import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMessageComponent } from './components/errorMessage/errorMessages.components';
import { ErrorMessagesComponent } from './components/errorMessages/errorMessages.components';

@NgModule({
  imports: [CommonModule],
  declarations: [ErrorMessagesComponent, ErrorMessageComponent],
  exports: [ErrorMessagesComponent, ErrorMessageComponent],
})
export class ErrorMessagesModule {}
