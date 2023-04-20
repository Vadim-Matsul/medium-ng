import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ErrorMessagesModule } from '../errorMessages/errorMessages.module';
import { ArticleFormComponent } from './components/articleForm/articleForm.component';
import { ControlFormService } from '../../services/controlForm.service';
import { ZodService } from '../../services/zod.service';

@NgModule({
  imports: [
    /* system */
    CommonModule,
    /* project */
    ErrorMessagesModule,
    ReactiveFormsModule,
  ],
  providers: [ControlFormService, ZodService],
  declarations: [ArticleFormComponent],
  exports: [ArticleFormComponent],
})
export class ArticleFormModule {}
