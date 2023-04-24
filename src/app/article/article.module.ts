import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ErrorMessagesModule } from '../shared/modules/errorMessages/errorMessages.module';
import { FavoriteButtonModule } from '../shared/modules/favorite-button/favorite-button.module';
import { FollowButtonModule } from '../shared/modules/follow-button/follow-button.module';
import { LoaderModule } from '../shared/modules/loader/loader.module';
import { TagListModule } from '../shared/modules/tagList/tag-list.module';
import { ArticleRoutingModule } from './article-routing.module';
import { ArticleComponent } from './components/article/article.component';
import { ArticleService as SharedArticleService } from '../shared/services/article.service';
import { ArticleService } from './services/article.service';
import { DeleteArticleEffect } from './store/effects/deleteArticle.effect';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { articleFeature } from './store/reducers';

@NgModule({
  imports: [
    /* system */
    CommonModule,
    StoreModule.forFeature(articleFeature),
    EffectsModule.forFeature([GetArticleEffect, DeleteArticleEffect]),
    /** project */
    ArticleRoutingModule,
    LoaderModule,
    ErrorMessagesModule,
    TagListModule,
    FavoriteButtonModule,
    FollowButtonModule,
  ],
  declarations: [ArticleComponent],
  providers: [SharedArticleService, ArticleService],
})
export class ArticleModule {}
