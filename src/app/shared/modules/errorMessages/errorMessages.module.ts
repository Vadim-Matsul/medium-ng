import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMessagesComponent } from './components/errorMessages/errorMessages.components';

@NgModule({
  imports: [CommonModule],
  declarations: [ErrorMessagesComponent],
  exports: [ErrorMessagesComponent],
})
export class ErrorMessagesModule {}
