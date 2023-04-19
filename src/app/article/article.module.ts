import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService } from '../shared/services/article.service';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { articleFeature } from './store/reducers';

@NgModule({
  imports: [
    /* system */
    CommonModule,
    StoreModule.forFeature(articleFeature),
    EffectsModule.forFeature([GetArticleEffect]),
    /** project */
    ArticleRoutingModule,
  ],
  declarations: [ArticleComponent],
  providers: [ArticleService],
})
export class ArticleModule {}
