import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of } from 'rxjs';

import { ArticleService as SharedArticleService } from 'src/app/shared/services/article.service';
import {
  getArticleAction,
  getArticleFailureAction,
  getArticleSuccessAction,
} from '../actions/getArticle.actions';

@Injectable()
export class GetArticleEffect {
  getArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(getArticleAction),
      exhaustMap(({ slug }) => {
        return this.sharedArticleService.fetchArticle(slug).pipe(
          map(({ article }) => {
            return getArticleSuccessAction({ article });
          }),
          catchError(() => {
            return of(getArticleFailureAction());
          })
        );
      })
    );
  });

  constructor(private actions$: Actions, private sharedArticleService: SharedArticleService) {}
}
