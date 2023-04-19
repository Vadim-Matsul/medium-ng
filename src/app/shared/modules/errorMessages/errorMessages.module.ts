import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorMessageComponent } from './components/errorMessage/errorMessages.components';
import { ErrorMessagesComponent } from './components/errorMessages/errorMessages.components';
import { ErrorSphereComponent } from './components/errorSphere/errorSphere.components';

@NgModule({
  imports: [CommonModule],
  declarations: [
    ErrorMessagesComponent,
    ErrorMessageComponent,
    ErrorSphereComponent,
  ],
  exports: [
    ErrorMessagesComponent,
    ErrorMessageComponent,
    ErrorSphereComponent,
  ],
})
export class ErrorMessagesModule {}
