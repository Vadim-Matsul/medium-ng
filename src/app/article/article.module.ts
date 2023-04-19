import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ErrorMessagesModule } from '../shared/modules/errorMessages/errorMessages.module';
import { LoaderModule } from '../shared/modules/loader/loader.module';
import { TagListModule } from '../shared/modules/tagList/tag-list.module';
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
    LoaderModule,
    ErrorMessagesModule,
    TagListModule,
  ],
  declarations: [ArticleComponent],
  providers: [ArticleService],
})
export class ArticleModule {}
