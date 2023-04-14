import { Injectable } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, exhaustMap, map, tap } from 'rxjs/operators';

import { AuthLinks } from '../../auth.module';
import { PersistentService } from './../../../shared/services/persistent.service';
import { AuthService } from './../../services/auth.service';
import {
  registerAction,
  registerFailureAction,
  registerSuccessAction,
} from '../actions/register.action';
import { authBackendErrorsModelSchema } from '../../models/authHttp.model';
import { StorageKeys } from 'src/app/shared/common/storage';

@Injectable()
export class RegisterEffect {
  register$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(registerAction),
      exhaustMap(({ request }) => {
        return this.authService.register(request).pipe(
          map((currentUser) => {
            this.persistentService.set<string>(
              StorageKeys.Token,
              currentUser.token
            );

            return registerSuccessAction({ currentUser });
          }),
          catchError((_errors: HttpErrorResponse) => {
            const errors = authBackendErrorsModelSchema.parse(_errors.error);
            return of(registerFailureAction(errors));
          })
        );
      })
    );
  });

  redirectToHome$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(registerSuccessAction),
        tap(() => {
          this.router.navigateByUrl(AuthLinks.Home);
        })
      );
    },
    {
      dispatch: false,
    }
  );

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistentService: PersistentService,
    private router: Router
  ) {}
}
