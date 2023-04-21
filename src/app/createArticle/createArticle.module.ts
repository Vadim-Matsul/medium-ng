import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';
import { CreateArticleRoutingModule } from './createArticle-routing.module';
import { CreateArticleComponent } from './components/createArticle/createArticle.component';
import { CreateArticleService } from './services/createArticle.service';
import { CreateArticleEffect } from './store/effects/createArticle.effect';
import { createArticleFeature } from './store/reducers';

@NgModule({
  imports: [
    /** system */
    CommonModule,
    StoreModule.forFeature(createArticleFeature),
    EffectsModule.forFeature([CreateArticleEffect]),
    /** project */
    CreateArticleRoutingModule,
    ArticleFormModule,
  ],
  declarations: [CreateArticleComponent],
  providers: [CreateArticleService],
})
export class CreateArticleModule {}
