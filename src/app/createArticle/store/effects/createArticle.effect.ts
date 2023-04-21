import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';

import { CreateArticleService } from './../../services/createArticle.service';
import {
  createArticleAction,
  createArticleFailureAction,
  createArticleSuccessAction,
} from '../actions/createArticle.actions';
import { backendErrorsResponseModelSchema } from 'src/app/shared/models/backendErrors.model';
import { feedModelSchema } from 'src/app/shared/models/posts/feed.model';
import { HttpLinks } from 'src/app/shared/common/httpLinks';

@Injectable()
export class CreateArticleEffect {
  createArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(createArticleAction),
      exhaustMap(({ articleFormData }) => {
        return this.createArticleService.createArticle(articleFormData).pipe(
          map((_article) => {
            const article = feedModelSchema.parse(_article);
            return createArticleSuccessAction({ article });
          }),
          catchError((_errors: HttpErrorResponse) => {
            const { errors } = backendErrorsResponseModelSchema.parse(_errors.error);
            return of(createArticleFailureAction({ errors }));
          })
        );
      })
    );
  });

  redirectAfterCreate$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(createArticleSuccessAction),
        tap(({ article: { slug } }) => {
          this.router.navigate(['/', HttpLinks.Posts, slug]);
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private createArticleService: CreateArticleService,
    private router: Router
  ) {}
}
