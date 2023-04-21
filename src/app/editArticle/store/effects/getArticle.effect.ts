import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../actions/getArticle.actions';
import { feedModelSchema } from 'src/app/shared/models/posts/feed.model';

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getArticleAction),
      exhaustMap(({ slug }) => {
        return this.sharedArticleService.fetchArticle(slug).pipe(
          map((data) => {
            const article = feedModelSchema.parse(data.article);
            return getArticleSuccessAction({ article });
          }),
          catchError(() => {
            return of(getArticleFailureAction());
          })
        );
      })
    );
  });

  constructor(
    private actions$: Actions,
    private sharedArticleService: SharedArticleService,
    private router: Router
  ) {}
}
