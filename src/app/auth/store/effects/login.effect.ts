import { Injectable } from '@angular/core';
import { type HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';

import { PersistentService } from './../../../shared/services/persistent.service';
import { AuthService } from './../../services/auth.service';
import { loginAction, loginFailureAction, loginSuccessAction } from '../actions/login.actions';
import { backendErrorsResponseModelSchema } from 'src/app/shared/models/backendErrors.model';
import { HttpLinks } from 'src/app/shared/common/httpLinks';
import { StorageKeys } from 'src/app/shared/common/storage';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginAction),
      exhaustMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser) => {
            this.persistentService.set<string>(StorageKeys.Token, currentUser.token);

            return loginSuccessAction({ currentUser });
          }),
          catchError((_error: HttpErrorResponse) => {
            const errors = backendErrorsResponseModelSchema.parse(_error.error);
            return of(loginFailureAction(errors));
          })
        );
      })
    );
  });

  redirectToHome$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl(HttpLinks.Home);
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistentService: PersistentService,
    private router: Router
  ) {}
}
