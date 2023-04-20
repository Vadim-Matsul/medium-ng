import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';
import { ErrorMessagesModule } from '../shared/modules/errorMessages/errorMessages.module';
import { CreateArticleRoutingModule } from './createArticle-routing.module';
import { CreateArticleComponent } from './components/createArticle/createArticle.component';

@NgModule({
  imports: [
    /** system */
    CommonModule,
    /** project */
    CreateArticleRoutingModule,
    ErrorMessagesModule,
    ArticleFormModule,
  ],
  declarations: [CreateArticleComponent],
})
export class CreateArticleModule {}
