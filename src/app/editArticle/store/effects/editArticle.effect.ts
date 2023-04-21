import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';

import { EditArticleService } from '../../services/editArticle.service';
import {
  editArticleAction,
  editArticleFailureAction,
  editArticleSuccessAction,
} from '../actions/editArticle.actions';
import {
  backendErrorResponseModelSchema,
  backendErrorsResponseModelSchema,
} from 'src/app/shared/models/backendErrors.model';
import { feedModelSchema } from 'src/app/shared/models/posts/feed.model';
import { HttpLinks } from 'src/app/shared/common/httpLinks';

@Injectable()
export class EditArticleEffect {
  editArticle$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(editArticleAction),
      exhaustMap(({ articleFormData, slug }) => {
        return this.editArticleService.updateArticle(slug, articleFormData).pipe(
          map((_article) => {
            const article = feedModelSchema.parse(_article);
            return editArticleSuccessAction({ article });
          }),
          catchError((_errors: HttpErrorResponse) => {
            const errorsProgress = backendErrorsResponseModelSchema.safeParse(_errors.error);
            const errorProgress = backendErrorResponseModelSchema.safeParse({
              error: _errors.error,
            });

            const draft = errorsProgress.success
              ? errorsProgress.data.errors
              : {
                  ['error']: errorProgress.success
                    ? [errorProgress.data.error.message]
                    : ['something went wrong'],
                };

            return of(editArticleFailureAction({ errors: draft }));
          })
        );
      })
    );
  });

  redirectAfterEdit$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(editArticleSuccessAction),
        tap(({ article: { slug } }) => {
          this.router.navigate(['/', HttpLinks.Posts, slug]);
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private editArticleService: EditArticleService,
    private router: Router
  ) {}
}
