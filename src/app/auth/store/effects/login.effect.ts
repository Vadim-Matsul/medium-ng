import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, exhaustMap, map, of, tap } from 'rxjs';

import { AuthLinks } from './../../auth-routing.module';
import { PersistentService } from './../../../shared/services/persistent.service';
import { AuthService } from './../../services/auth.service';
import {
  loginAction,
  loginFailureAction,
  loginSuccessAction,
} from '../actions/login.actions';
import { authBackendErrorsModelSchema } from '../../models/auth.model';
import { StorageKeys } from 'src/app/shared/common/storage';

@Injectable()
export class LoginEffect {
  login$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(loginAction),
      exhaustMap(({ request }) => {
        return this.authService.login(request).pipe(
          map((currentUser) => {
            this.persistentService.set<string>(
              StorageKeys.Token,
              currentUser.token
            );

            return loginSuccessAction({ currentUser });
          }),
          catchError((_error: HttpErrorResponse) => {
            const errors = authBackendErrorsModelSchema.parse(_error.error);
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
          this.router.navigateByUrl(AuthLinks.Home);
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
