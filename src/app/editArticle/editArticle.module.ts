import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { ArticleFormModule } from '../shared/modules/articleForm/articleForm.module';
import { ErrorMessagesModule } from '../shared/modules/errorMessages/errorMessages.module';
import { LoaderModule } from '../shared/modules/loader/loader.module';
import { EditArticleRoutingModule } from './editArticle-routing.module';
import { EditArticleComponent } from './components/editArticle/editArticle.component';
import { EditArticleService } from './services/editArticle.service';
import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service';
import { EditArticleEffect } from './store/effects/editArticle.effect';
import { GetArticleEffect } from './store/effects/getArticle.effect';
import { editArticleFeature } from './store/reducers';

@NgModule({
  imports: [
    /** system */
    CommonModule,
    StoreModule.forFeature(editArticleFeature),
    EffectsModule.forFeature([EditArticleEffect, GetArticleEffect]),
    /** project */
    EditArticleRoutingModule,
    ErrorMessagesModule,
    ArticleFormModule,
    LoaderModule,
  ],
  declarations: [EditArticleComponent],
  providers: [EditArticleService, SharedArticleService],
})
export class EditArticleModule {}
